package dev.robocode.tankroyale.gui.ui.arena

import java.awt.BorderLayout
import javax.swing.JPanel

object BattlePanel : JPanel() {

    init {
        layout = BorderLayout()
        add(ArenaPanel, BorderLayout.CENTER)
        add(SidePanel, BorderLayout.EAST)
        add(ScoreSidePanel, BorderLayout.WEST)
    }

    fun removeArena() {
        remove(ArenaPanel)
            
        refresh()
    }

    private fun refresh() {
        validate()
        repaint()
    }
}