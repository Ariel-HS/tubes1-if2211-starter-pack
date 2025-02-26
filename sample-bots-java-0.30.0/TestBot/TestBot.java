import dev.robocode.tankroyale.botapi.*;
import dev.robocode.tankroyale.botapi.events.*;

public class TestBot extends Bot {

    // The main method starts our bot
    public static void main(String[] args) {
        new TestBot().start();
    }

    // Constructor, which loads the bot config file
    TestBot() {
        super(BotInfo.fromFile("TestBot.json"));
    }

    // Called when a new round is started -> initialize and do some movement
    @Override
    public void run() {
        // Repeat while the bot is running
        while (isRunning()) {
            forward(100);
            turnGunRight(360);
            turnRight(90);
            back(100);
            turnGunRight(360);
            turnLeft(90);
        }
    }

    // We saw another bot -> fire!
    @Override
    public void onScannedBot(ScannedBotEvent e) {
        fire(1);
    }

    // We were hit by a bullet -> turn perpendicular to the bullet
    @Override
    public void onHitByBullet(HitByBulletEvent e) {
        // Calculate the bearing to the direction of the bullet
        var bearing = calcBearing(e.getBullet().getDirection());

        // Turn 90 degrees to the bullet direction based on the bearing
        turnLeft(90 - bearing);
    }
}
