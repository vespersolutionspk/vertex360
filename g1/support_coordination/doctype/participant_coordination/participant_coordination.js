frappe.ui.form.on("Participant Coordination", {
	refresh(frm) {
		// your code here
	}
});

frappe.ui.form.on("Case Note Table", {
   total_billing:function(frm, cdt, cdn){
   var b = locals[cdt][cdn];
   var totala = 0;
   frm.doc.case_notes.forEach(function(b) {
     refresh_field(b.total_billing);
     totala += b.total_billing; });
   frm.set_value("total_billings", totala);
   refresh_field("total_billings");
 },
   total_billing_remove:function(frm, cdt, cdn){
   var b = locals[cdt][cdn];
   var totala = 0;
   frm.doc.case_notes.forEach(function(b) { 
     refresh_field(b.total_billing);
     totala += b.total_billing; });
   frm.set_value("total_billings", totala);
   refresh_field("total_billings");
 }
});
