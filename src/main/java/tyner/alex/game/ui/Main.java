package tyner.alex.game.ui;

import java.util.ArrayList;
import java.util.List;
import org.teavm.jso.browser.Window;
import org.teavm.jso.canvas.CanvasRenderingContext2D;
import org.teavm.jso.dom.events.EventListener;
import org.teavm.jso.dom.events.MouseEvent;
import org.teavm.jso.dom.html.HTMLCanvasElement;
import org.teavm.jso.dom.html.HTMLDocument;
import org.teavm.jso.dom.html.HTMLElement;

import tyner.alex.game.components.Branch;
import tyner.alex.game.util.Point;
import tyner.alex.game.util.Vector;

public class Main {

    private final CanvasRenderingContext2D c;
    private double width;
    private double height;

    private List<Branch> branches;

    public enum motion {
        FOLLOW_MOUSE, FOLLOW_EQUATIONS, FOLLOW_CLICKS
    }

    private Main(HTMLDocument document, motion type) {
        final HTMLCanvasElement canvas = createCanvas(document, true);
        c = canvas.getContext("2d").cast();

        setup();
        populateBranches();
        switch (type) {
        case FOLLOW_MOUSE:
            followMouse(canvas);
            break;
        case FOLLOW_EQUATIONS:
            followEquations();
            break;
        case FOLLOW_CLICKS:
            followClicks(canvas);
            break;
        }
    }

    private boolean tracking = false;

    private void followClicks(HTMLCanvasElement canvas) {
        canvas.addEventListener("click", (EventListener<MouseEvent>) e -> {
            tracking = false;
            tracking = true;
            new Thread(() -> {
                Point current = branches.get(0).root().getVector().getStart();
                Point dest = new Point(e.getClientX(), e.getClientY());
                try {
                    while (tracking) {
                        Thread.sleep(1);
                        Vector delta = new Vector(current, dest);
                        delta.setMagnitude(15.0);
                        updateBranches(delta.getEnd());
                        showBranches();
                    }
                    
                } catch (InterruptedException i) {
                    // nothing
                }
            }).start();
        });
    }

    private void followEquations() {
        new Thread(() -> {
            try {
                double t = 100.0;
                double a = 1.0;
                double b = 1.0;
                while (true) {
                    Thread.sleep(1);
                    // follow some parametric in x, y functions
                    double x = width / 2 + (a * t + Math.sin(b * (t * t))) * Math.cos(t);
                    double y = height / 2 + (a * t + Math.sin(b * (t * t))) * Math.sin(t);
                    updateBranches(new Point(x, y));
                    t += Math.PI / 480;
                    showBranches();
                }
            } catch (InterruptedException e) {
                // nothing
            }
        }).start();
    }

    private void followMouse(HTMLCanvasElement canvas) {
        canvas.addEventListener("mousemove", (EventListener<MouseEvent>) e -> {
            updateBranches(new Point(e.getClientX(), e.getClientY()));
            showBranches();
        });
    }

    public static void main(String[] args) {
        new Main(HTMLDocument.current(), motion.FOLLOW_EQUATIONS);
    }

    private HTMLCanvasElement createCanvas(HTMLDocument document, boolean fullscreen) {
        if (!fullscreen)
            throw new UnsupportedOperationException(
                    "Only support for fullscreen canvases is implemented.");
        final HTMLElement body = document.getBody();
        final HTMLCanvasElement canvas = document.createElement("canvas").withAttr("id", "canvas")
                .cast();

        canvas.setWidth(Window.current().getInnerWidth());
        canvas.setHeight(Window.current().getInnerHeight());

        width = canvas.getWidth();
        height = canvas.getHeight();

        body.appendChild(canvas);
        return canvas;
    }

    private void clearCanvas() {
        // Draw background.
        c.setFillStyle("#2A363B");
        c.fillRect(0, 0, width, height);
    }

    private void setup() {
        clearCanvas();
        branches = new ArrayList<>();
    }

    private void populateBranches() {
//        Random rand = new Random();
        Branch b = new Branch(width / 2, height / 2, 10.0, 0.5);
        for (int i = 0; i < 120; i++) {
            b.append();
        }
        branches.add(b);

//        Branch a = new Branch();
//        a.addRoot(width / 2, height / 2, 10.0, Math.toRadians(180), Segment.DEFAULT_STROKE_WEIGHT);
//        for (int i = 0; i < 120; i++) {
//            a.add(12.0, Math.toRadians(rand.nextInt(100) - 50));
//        }
//        branches.add(a);
//        Branch c = new Branch();
//        c.addRoot(width / 2, height / 2, 10.0, Math.toRadians(180), Segment.DEFAULT_STROKE_WEIGHT);
//        for (int i = 0; i < 120; i++) {
//            c.add(16.0, Math.toRadians(rand.nextInt(100) - 50));
//        }
//        branches.add(c);
//        Branch d = new Branch();
//        d.addRoot(width / 2, height / 2, 10.0, Math.toRadians(180), Segment.DEFAULT_STROKE_WEIGHT);
//        for (int i = 0; i < 120; i++) {
//            d.add(22.0, Math.toRadians(rand.nextInt(100) - 50));
//        }
//        branches.add(d);

    }

    private void updateBranches(Point target) {
        for (Branch b : branches) {
            b.update(target);
        }
    }

    private void showBranches() {
        clearCanvas();
        for (Branch b : branches)
            b.show(c);
    }
}
