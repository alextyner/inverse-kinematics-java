package tyner.alex.game.ui;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import org.teavm.jso.browser.Window;
import org.teavm.jso.canvas.CanvasRenderingContext2D;
import org.teavm.jso.dom.events.EventListener;
import org.teavm.jso.dom.events.MouseEvent;
import org.teavm.jso.dom.html.HTMLCanvasElement;
import org.teavm.jso.dom.html.HTMLDocument;
import org.teavm.jso.dom.html.HTMLElement;

import tyner.alex.game.components.Branch;
import tyner.alex.game.components.Segment;
import tyner.alex.game.util.Point;

public class Main {

    private final CanvasRenderingContext2D c;
    private double width;
    private double height;

    private List<Branch> branches;

    private Main(HTMLDocument document, boolean followMouse) {
        final HTMLCanvasElement canvas = createCanvas(document, true);
        c = canvas.getContext("2d").cast();

        setup();
        populateBranches();
        if (followMouse)
            addEventListeners(canvas);
        else
            loop();
    }

    public void loop() {
        new Thread(() -> {
            try {
                double t = 0.0;
                while (true) {
                    Thread.sleep(1);
                    // follow some parametric in x, y functions
                    updateBranches(new Point((width / 2) + 600 * Math.pow(Math.cos(t), 3),
                            (height / 2) + 400 * Math.pow(Math.sin(t), 3)));
                    t += Math.PI / 240;
                    showBranches();
                }
            } catch (InterruptedException e) {
                // nothing
            }
        }).start();
    }

    private void addEventListeners(HTMLCanvasElement canvas) {
        canvas.addEventListener("mousemove", (EventListener<MouseEvent>) e -> {
            updateBranches(new Point(e.getClientX(), e.getClientY()));
            showBranches();
        });
    }

    public static void main(String[] args) {
        new Main(HTMLDocument.current(), false);
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
        Random rand = new Random();
        Branch b = new Branch();
        b.addRoot(width / 2, height / 2, 10.0, Math.toRadians(180), Segment.DEFAULT_STROKE_WEIGHT);
        for (int i = 0; i < 120; i++) {
            b.add(25.0, Math.toRadians(rand.nextInt(100) - 50));
        }
        branches.add(b);

        Branch a = new Branch();
        a.addRoot(width / 2, height / 2, 10.0, Math.toRadians(180), Segment.DEFAULT_STROKE_WEIGHT);
        for (int i = 0; i < 120; i++) {
            a.add(12.0, Math.toRadians(rand.nextInt(100) - 50));
        }
        branches.add(a);
        Branch c = new Branch();
        c.addRoot(width / 2, height / 2, 10.0, Math.toRadians(180), Segment.DEFAULT_STROKE_WEIGHT);
        for (int i = 0; i < 120; i++) {
            c.add(16.0, Math.toRadians(rand.nextInt(100) - 50));
        }
        branches.add(c);
        Branch d = new Branch();
        d.addRoot(width / 2, height / 2, 10.0, Math.toRadians(180), Segment.DEFAULT_STROKE_WEIGHT);
        for (int i = 0; i < 120; i++) {
            d.add(22.0, Math.toRadians(rand.nextInt(100) - 50));
        }
        branches.add(d);

    }

    private void updateBranches(Point target) {
        for (Branch b : branches) {
            b.update(target);
            target.setY(target.getY() + 50.0);
        }
    }

    private void showBranches() {
        clearCanvas();
        for (Branch b : branches)
            b.show(c);
    }
}
