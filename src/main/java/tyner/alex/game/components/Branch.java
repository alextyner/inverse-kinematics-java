package tyner.alex.game.components;

import java.util.ArrayList;
import java.util.List;
import org.teavm.jso.canvas.CanvasRenderingContext2D;

import tyner.alex.game.util.Point;

/**
 * A Branch made up of connected Segments intertwined kinematically.
 * 
 * @author Alex Tyner
 */
public class Branch {

    private static final double WEIGHT_REDUCTION_RATE = 1.02;

    private List<Segment> list;

    /**
     * Default constructor for the Branch.
     */
    public Branch() {
        this(0, 0, 10.0, Segment.DEFAULT_STROKE_WEIGHT);
    }

    /**
     * Constructor for the Branch. Adds an initial segment with the given length and
     * weight at the given (x, y) with a 0-degree heading.
     * 
     * @param x            x-coordinate
     * @param y            y-coordinate
     * @param length       length of initial segment
     * @param strokeWeight weight of initial segment
     */
    public Branch(double x, double y, double length, double strokeWeight) {
        list = new ArrayList<Segment>();
        addRoot(x, y, length, 0, strokeWeight);
    }

    private Segment addRoot(double x, double y, double length, double angle, double strokeWeight) {
        if (!list.isEmpty())
            throw new IllegalArgumentException("Branch already has a root.");
        Segment s = new Segment(null, x, y, length, angle, strokeWeight);
        list.add(s);
        return s;
    }

    /**
     * Adds a segment with the same length as the initial segment and a 0-degree
     * heading.
     * 
     * @return the newly added segment
     */
    public Segment append() {
        return append(list.get(0).getVector().magnitude(), 0.0);
    }

    public Segment append(double length, double angle) {
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
