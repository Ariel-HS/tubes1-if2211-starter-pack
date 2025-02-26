package dev.robocode.tankroyale.gui.ui.arena

import dev.robocode.tankroyale.gui.client.ClientEvents
import dev.robocode.tankroyale.gui.model.GameStartedEvent
import dev.robocode.tankroyale.gui.model.Participant
import dev.robocode.tankroyale.gui.model.TickEvent
import dev.robocode.tankroyale.gui.model.BotState
import dev.robocode.tankroyale.gui.ui.console.BotConsoleFrame
import dev.robocode.tankroyale.gui.ui.extensions.WindowExt.onClosing
import dev.robocode.tankroyale.gui.ui.arena.ScoreSidePanel
import dev.robocode.tankroyale.gui.util.Event
import java.awt.Dimension
import java.util.concurrent.atomic.AtomicBoolean
import javax.swing.BoxLayout
import javax.swing.JTable
import javax.swing.JPanel
import javax.swing.JScrollPane
import javax.swing.SwingUtilities

// typealias BotIdentifier = String

object ScoreSidePanel : JPanel() {

    private const val WIDTH = 240

    private var scoreTable: ScoreTable? = null

    private val tick = AtomicBoolean(false)

    init {
        preferredSize = Dimension(WIDTH, Int.MAX_VALUE)

        layout = BoxLayout(this, BoxLayout.Y_AXIS)

        ClientEvents.apply {
            onGameStarted.subscribe(ScoreSidePanel) { onGameStarted(it) }
            onTickEvent.subscribe(ScoreSidePanel) { onTick(it) }
        }
    }

    private fun onGameStarted(gameStartedEvent: GameStartedEvent) {
        removeAll()

        scoreTable = ScoreTable(gameStartedEvent.participants)

        val scorePane = JScrollPane(scoreTable)

        add(scorePane)

        revalidate()
    }

    private fun onTick(tickEvent: TickEvent) {
        if (tick.get()) return
        tick.set(true)

        SwingUtilities.invokeLater {
            tickEvent.botStates.forEach { bot ->
                scoreTable?.updateEnergy(bot.id, bot.energy)
            }
    
            tickEvent.results.forEach { bot ->
                scoreTable?.updateScore(bot.id, bot.totalScore)
            }
            repaint()

            tick.set(false)
        }
    }

    // private fun getData(results: List<Results>): Array<Array<String>> {
    //     val list = ArrayList<Array<String>>()
    //     results.forEach {
    //         val name = "${it.name} ${it.version}"
    //         list.add(
    //             arrayOf(
    //                 "" + it.rank,
    //                 "" + name,
    //                 "" + it.totalScore,
    //                 "" + it.survival,
    //                 "" + it.lastSurvivorBonus,
    //                 "" + it.bulletDamage,
    //                 "" + it.bulletKillBonus,
    //                 "" + it.ramDamage,
    //                 "" + it.ramKillBonus,
    //                 "" + it.firstPlaces,
    //                 "" + it.secondPlaces,
    //                 "" + it.thirdPlaces
    //             )
    //         )
    //     }
    //     return list.toArray(arrayOfNulls<Array<String>>(list.size))
    // }
}