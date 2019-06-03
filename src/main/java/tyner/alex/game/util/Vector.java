package tyner.alex.game.util;

/**
 * Vectors have both magnitude and direction. Tracks the (x, y) origination and
 * termination points of the vector as Point objects. Extends the {@link Point}
 * class.
 * 
 * @see {@link Point} for using basic Cartesian locations
 * 
 * @author Alex Tyner
 */
public class Vector extends Point {

    private Point start;
    private Point end;
    private double magnitude;
    private double angle;

    /**
     * Essentially a copy-constructor. Produces an unlinked copy of the given
     * {@link Vector}. Used by {@link Vector#copy()}.
     * 
     * @param old {@link Vector} to copy
     */
    private Vector(Vector old) {
        this(old.getX(), old.getY(), old.magnitude(), old.angle());
    }

    /**
     * Constructs a Vector from start and end points. For vector subtraction, use
     * {@link Vector#getEnd()} for the destination vector. For example, Vector(v1,
     * v2.getEnd()) == (v1 + v2) mathematically.
     * 
     * @param start starting point (or, in the case of a vector, uses its origin
     *              point)
     * @param end   ending point (or, in the case of a vector, uses its origin
     *              point)
     */
    public Vector(Point start, Point end) {
        this(start.getX(), start.getY(),
                Math.sqrt(Math.pow((end.getY() - start.getY()), 2)
                        + Math.pow((end.getX() - start.getX()), 2)),
                Math.atan2(end.getY() - start.getY(), end.getX() - start.getX()));
    }

    /**
     * Constructor for the Vector. Angle expected in radians.
     * 
     * @param x         origin x
     * @param y         origin y
     * @param magnitude vector length, magnitude
     * @param angle     vector angle, direction, heading (radians)
     */
    public Vector(double x, double y, double magnitude, double angle) {
        start = new Point(x, y);
        this.magnitude = magnitude;
        this.angle = angle;
        end = new Point(x + magnitude * Math.cos(angle), y + magnitude * Math.sin(angle));
    }

    public void congruentTranslate(double dx, double dy) {
        Point a = getStart();
        Point b = getEnd();
        a.setX(a.getX() + dx);
        a.setY(a.getY() + dy);
        b.setX(b.getX() + dx);
        b.setY(b.getY() + dy);
    }

    public void setStart(double x, double y) {
        start = new Point(x, y);
        angle = Math.atan2(end.getY() - start.getY(), end.getX() - start.getX());
        magnitude = Math.sqrt(Math.pow((end.getY() - start.getY()), 2)
                + Math.pow((end.getX() - start.getX()), 2));
    }

    public void setEnd(double x, double y) {
        end = new Point(x, y);
        angle = Math.atan2(end.getY() - start.getY(), end.getX() - start.getX());
        magnitude = Math.sqrt(Math.pow((end.getY() - start.getY()), 2)
                + Math.pow((end.getX() - start.getX()), 2));
    }

    public Point getEnd() {
        return end;
    }

    public Point getStart() {
        return start;
    }

    @Override
    public void setX(double x) {
        setStart(x, start.getY());
    }

    @Override
    public void setY(double y) {
        setStart(start.getX(), y);
    }

    @Override
    public double getX() {
        return start.getX();
    }

    @Override
    public double getY() {
        return start.getY();
    }

    public void scale(double factor) {
        setMagnitude(factor * magnitude());
    }

    public void setAngle(double angle) {
        if (this.angle != angle) {
            this.angle = angle;
            end = new Point(start.getX() + magnitude * Math.cos(angle),
                    start.getY() + magnitude * Math.sin(angle));
        }
    }

    public void setMagnitude(double magnitude) {
        if (this.magnitude != magnitude) {
            this.magnitude = magnitude;
            end = new Point(start.getX() + magnitude * Math.cos(angle),
                    start.getY() + magnitude * Math.sin(angle));
        }
    }

    public double magnitude() {
        return magnitude;
    }

    public double angle() {
        return angle;
    }

    /**
     * Produces a unique copy of this {@link Vector}.
     * 
     * @return an unlinked {@link Vector} identical to this {@link Vector}
     */
    @Override
    public Vector copy() {
        return new Vector(this);
    }
}
