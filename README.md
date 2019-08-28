# Inverse Kinematics

Simulates and visualizes physical movement using the principles of [inverse kinematics](https://en.wikipedia.org/wiki/Inverse_kinematics). 

## Tooling

This project utilizes [TeaVM](http://teavm.org/), a tool providing a Java interface for the HTML DOM, to produce JavaScript which can be run in the browser.

## Compilation

This is a Maven project. Use Maven to build it.

```bash
$ cd inverse-kinematics-java
$ mvn clean package
```

Output will include [transpiled](https://en.wikipedia.org/wiki/Source-to-source_compiler) JavaScript and an HTML page, `index.html`.

## Examples

[Cursor Tracking](https://alextyner.github.io/inverse-kinematics-java/follow-mouse/) (fun)

[Growing Spiral](https://alextyner.github.io/inverse-kinematics-java/grow-spiral/)

[Parametric Equations](https://alextyner.github.io/inverse-kinematics-java/para-eq/)

