frappe.ui.form.on("Case Note", {
	refresh(frm){
		var rate = 1.669;
		switch(frm.doc.time) {
            case '5 Minutes':
                frm.set_value('total_billing', (1.669 * 5));
                break;
            case '10 Minutes':
                frm.set_value('total_billing', (1.669 * 10));
                break;
            case '15 Minutes':
                frm.set_value('total_billing', (1.669 * 15));
                break;
            case '20 Minutes':
                frm.set_value('total_billing', (1.669 * 20));
                break;
            case '30 Minutes':
                frm.set_value('total_billing', (1.669 * 30));
                break;
            case '45 Minutes':
                frm.set_value('total_billing', (1.669 * 45));
                break;
            case '1 Hr':
                frm.set_value('total_billing', (1.669 * 60));
                break;
            case '1 Hr 15 Minutes':
                frm.set_value('total_billing', (1.669 * 75));
                break;
            case '1 Hr 30 Minutes':
                frm.set_value('total_billing', (1.669 * 90));
                break;
            case '1 Hr 45 Minutes':
                frm.set_value('total_billing', (1.669 * 105));
                break;
            case '2 Hrs':
                frm.set_value('total_billing', (1.669 * 120));
                break;
            case '2 Hrs 15 Minutes':
                frm.set_value('total_billing', (1.669 * 135));
                break;
            case '2 Hrs 30 Minutes':
                frm.set_value('total_billing', (1.669 * 150));
                break;
            case '2 Hrs 45 Minutes':
                frm.set_value('total_billing', (1.669 * 165));
                break;
            case '3 Hrs':
                frm.set_value('total_billing', (1.669 * 180));
                break;
            case '3 Hrs 15 Minutes':
                frm.set_value('total_billing', (1.669 * 195));
                break;
            case '3 Hrs 30 Minutes':
                frm.set_value('total_billing', (1.669 * 210));
                break;
            case '3 Hrs 45 Minutes':
                frm.set_value('total_billing', (1.669 * 225));
                break;
            case '4 Hrs':
                frm.set_value('total_billing', (1.669 * 240));
                break;
            case '4 Hrs 15 Minutes':
                frm.set_value('total_billing', (1.669 * 255));
                break;
            case '4 Hrs 30 Minutes':
                frm.set_value('total_billing', (1.669 * 270));
                break;
            case '4 Hrs 45 Minutes':
                frm.set_value('total_billing', (1.669 * 285));
                break;
            case '5 Hrs':
                frm.set_value('total_billing', (1.669 * 300));
                break;
            case '5 Hrs 15 Minutes':
                frm.set_value('total_billing', (1.669 * 315));
                break;
            case '5 Hrs 30 Minutes':
                frm.set_value('total_billing', (1.669 * 330));
                break;
            case '5 Hrs 45 Minutes':
                frm.set_value('total_billing', (1.669 * 345));
                break;
            case '6 Hrs':
                frm.set_value('total_billing', (1.669 * 360));
                break;
            case '6 Hrs 15 Minutes':
                frm.set_value('total_billing', (1.669 * 375));
                break;
            case '6 Hrs 30 Minutes':
                frm.set_value('total_billing', (1.669 * 390));
                break;
            case '6 Hrs 45 Minutes':
                frm.set_value('total_billing', (1.669 * 405));
                break;
            case '7 Hrs':
                frm.set_value('total_billing', (1.669 * 420));
                break;
            case '7 Hrs 15 Minutes':
                frm.set_value('total_billing', (1.669 * 435));
                break;
            case '7 Hrs 30 Minutes':
                frm.set_value('total_billing', (1.669 * 450));
                break;
            case '7 Hrs 45 Minutes':
                frm.set_value('total_billing', (1.669 * 465));
                break;
            case '8 Hrs':
                frm.set_value('total_billing', (1.669 * 480));
                break;
            }

	}
});
