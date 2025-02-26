package dev.robocode.tankroyale.gui.ui.arena

import dev.robocode.tankroyale.gui.model.Results
import java.awt.Dimension
import javax.swing.JTable
import javax.swing.SwingConstants
import javax.swing.table.DefaultTableModel
import dev.robocode.tankroyale.gui.model.Participant

class ScoreTable(val participants: List<Participant>) : JTable() {

    init {
        val columnName = arrayOf(
            "Nama",
            "Energy",
            "Total Score"
        )

        model = DefaultTableModel(getInitialData(participants), columnName)

        columnModel.getColumn(0).preferredWidth = 120
        columnModel.getColumn(1).preferredWidth = 60
        columnModel.getColumn(2).preferredWidth = 60
    }

    override fun getMaximumSize() : Dimension {
        val size = super.getMaximumSize()
        size.width = Int.MAX_VALUE
        return size
    }

    private fun getInitialData(participants: List<Participant>): Array<Array<String>> {
        val tableData = ArrayList<Array<String>>()
        participants.forEach { 
            tableData.add(
                arrayOf(
                    "" + it.displayName,
                    "" + 0,
                    "" + 0
                )
            )
        }
        return tableData.toArray(arrayOfNulls<Array<String>>(tableData.size))
    }

    fun updateEnergy(id: Int, energy: Double) {
        model.setValueAt(energy.toString(), id-1, 1)
    }

    fun updateScore(id: Int, score: Int) {
        model.setValueAt(score.toString(), id-1, 2)
    }
}