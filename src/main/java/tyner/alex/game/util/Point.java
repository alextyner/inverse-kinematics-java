package tyner.alex.game.util;

/**
 * Cartesian position with (x, y) coordinates.
 * 
 * @see {@link Vector} extends {@link Point}, implementing vector qualities
 *      (magnitude and direction)
 * 
 * @author Alex Tyner
 */
public class Point {

    private double x;
    private double y;

    /**
     * Constructor for the Point. Located at (0, 0).
     */
    public Point() {
        // default values
    }

    /**
     * Constructor for the Point. The Point is located at Cartesian position (x, y).
     * 
     * @param x x-coordinate
     * @param y y-coordinate
     */
    public Point(double x, double y) {
        this.x = x;
        this.y = y;
    }

    /**
     * Essentially a copy-constructor. Produces an unlinked copy of the given
     * {@link Point}. Used by {@link Point#copy()}.
     * 
     * @param old {@link Point} to copy
     */
    private Point(Point old) {
        this(old.getX(), old.getY());
    }

    public double getX() {
        return x;
    }

    public double getY() {
        return y;
    }

    public void set(double x, double y) {
        setX(x);
        setY(y);
    }

    public void setX(double x) {
        this.x = x;
    }

    public void setY(double y) {
        this.y = y;
    }

    /**
     * Produces a unique copy of this {@link Point}.
     * 
     * @return an unlinked {@link Point} identical to this {@link Point}
     */
    public Point copy() {
        return new Point(this);
    }

}
