'use strict';

exports.BattleItems = {
	"chillytite": {
		id: "chillytite",
		name: "Chillytite",
		spritenum: 594,
		megaStone: "Chillyte-Mega",
		megaEvolves: "Chillyte",
		itemUser: ["Chillyte"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 673,
		gen: 8,
		desc: "If held by a Chillyte, this item allows it to Mega Evolve in battle.",
	},
};
