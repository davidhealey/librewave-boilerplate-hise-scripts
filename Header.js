/*
    Copyright 2021 David Healey

    This file is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This file is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with This file. If not, see <http://www.gnu.org/licenses/>.
*/

namespace Header
{
    reg title = "";
    
    // pnlHeader
    const pnlHeader = Content.getComponent("pnlHeader");

    pnlHeader.setPaintRoutine(function(g)
    {
        // Header
        g.fillAll(THEME.header.bgColour);

        // Preset display
        g.setColour(THEME.presetDisplay.bgColour);
        var a = [lblPreset.get("x"), lblPreset.get("y"), lblPreset.getWidth(), lblPreset.getHeight() + 2];
        g.fillRoundedRectangle(a, 5);
        
        // Expansion name
        g.setFont("bold", 24);
        g.setColour(THEME.header.textColour);
        g.drawAlignedText(title, [20, this.getHeight() / 2 - 30 / 2, 300, 26], "left");
    });

    // lblPreset
    const lblPreset = Content.getComponent("lblPreset");
    lblPreset.set("text", "");
    
    // Function    
    inline function redraw()
    {
        if (Expansions.getCurrentExpansionName() != undefined)
        {
            title = Expansions.getCurrentExpansionName();
            pnlHeader.repaint();
            updatePresetLabel();
        }
    }
    
    inline function updatePresetLabel()
    {
        local patchName = Patches.getCurrentPatchName();
        local presetName = Engine.getCurrentUserPresetName();
        local text = "";
        
        lblPreset.set("text", "");

        if (patchName != undefined && patchName != "")
            text = patchName + "  -  ";
            
        if (presetName != undefined)
        {
            text += presetName;
            lblPreset.set("text", text);
        }
    }
}
