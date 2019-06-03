package tyner.alex.game.components;

import java.util.ArrayList;
import java.util.List;
import org.teavm.jso.canvas.CanvasRenderingContext2D;

import tyner.alex.game.util.Point;

/**
 * 
 * 
 * @author Alex Tyner
 */
public class Branch {

    private static final double WEIGHT_REDUCTION_RATE = 1.02;

    private List<Segment> list;

    /**
     * Constructor for the Branch.
     */
    public Branch() {
        list = new ArrayList<Segment>();
    }

    public Segment addRoot(double x, double y, double length, double angle, double strokeWeight) {
        if (!list.isEmpty())
            throw new IllegalArgumentException("Branch already has a root.");
        Segment s = new Segment(null, x, y, length, angle, strokeWeight);
        list.add(s);
        return s;
    }

    public Segment add(double length, double angle) {
        if (list.isEmpty()) {
            return addRoot(0, 0, length, angle, Segment.DEFAULT_STROKE_WEIGHT);
        }
        Segment recent = list.get(list.size() - 1);
        Point joint = recent.getVector().getEnd();
        Segment s = new Segment(leaf(), joint.getX(), joint.getY(), length, angle,
                list.get(0).getStrokeWeight() * Math.pow(WEIGHT_REDUCTION_RATE, list.size()));
        list.add(s);
        return s;
    }

    public Segment root() {
        return list.isEmpty() ? null : list.get(0);
    }

    public Segment leaf() {
        return list.isEmpty() ? null : list.get(list.size() - 1);
    }

    public int size() {
        return list.size();
    }

    public void show(CanvasRenderingContext2D c) {
        for (Segment s : list) {
            s.show(c);
        }
    }

    public void update(Point target) {
        if (list.size() > 0)
            update(leaf(), target);
    }

    private void update(Segment s, Point target) {
        if (s == null)
            return;
        s.biasTowards(target);
        update(s.getParent(), s.getVector());
    }
}
