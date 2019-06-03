package tyner.alex.game.components;

import org.teavm.jso.canvas.CanvasRenderingContext2D;

import tyner.alex.game.util.Point;
import tyner.alex.game.util.Vector;

/**
 * 
 * 
 * @author Alex Tyner
 */
public class Segment {

    public static final double DEFAULT_STROKE_WEIGHT = 1.0;
    private static final String SEGMENT_STROKE_STYLE = "#FFFFFF";

    private double strokeWeight;
    private Vector vector;
    private Segment parent;

    public Segment(Segment parent, double x, double y, double length, double angle) {
        this(parent, x, y, length, angle, DEFAULT_STROKE_WEIGHT);
    }

    public Segment(Segment parent, double x, double y, double length, double angle,
            double strokeWeight) {
        vector = new Vector(x, y, length, angle);
        setStrokeWeight(strokeWeight);
        this.parent = parent;
    }

    public Segment getParent() {
        return parent;
    }

    public void setStrokeWeight(double strokeWeight) {
        this.strokeWeight = strokeWeight;
    }

    public double getStrokeWeight() {
        return strokeWeight;
    }

    public void biasTowards(Point p) {
        Vector target = new Vector(vector, p);
        vector.setAngle(target.angle());
        double dx = p.getX() - vector.getEnd().getX();
        double dy = p.getY() - vector.getEnd().getY();
        vector.congruentTranslate(dx, dy);
    }

    public Vector getVector() {
        return vector;
    }

    /**
     * Display this Segment on an HTML canvas element.
     * 
     * @param c a canvas rendering context
     */
    public void show(CanvasRenderingContext2D c) {
        c.setStrokeStyle(SEGMENT_STROKE_STYLE);
        c.setLineWidth(strokeWeight);
        c.beginPath();
        c.moveTo(vector.getStart().getX(), vector.getStart().getY());
        c.lineTo(vector.getEnd().getX(), vector.getEnd().getY());
        c.stroke();
    }

}
