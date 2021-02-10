frappe.ui.form.on("Plan Management Invoice",{
	refresh(frm) {
		// your code here
	}
});

frappe.ui.form.on("Services Support List", {
	rate:function(frm, cdt, cdn){
	var f = locals[cdt][cdn];
	var total = 0;
	frappe.model.set_value(f.doctype, f.name, "total_price", f.quantity * f.rate);
	frm.doc.services.forEach(function(f) { total += f.total_price; });
	frm.set_value("grand_total", total);
	refresh_field("grand_total");
},
	quantity:function(frm, cdt, cdn){
		var f = locals[cdt][cdn];
		var total = 0;
		frappe.model.set_value(f.doctype, f.name, "total_price", f.quantity * f.rate);
		frm.doc.services.forEach(function(f) { total += f.total_price; });
		frm.set_value("grand_total", total);
		refresh_field("grand_total");
}


});
