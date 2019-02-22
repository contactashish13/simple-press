/* ---------------------------------
 Simple:Press - Version 5.0
 Forum Admin Javascript loaded in footer after page loads

 $LastChangedDate: 2019-02-22 09:48:50 -0700 (Fri, 22 Feb 2019) $
 $Rev: 14157 $
 ------------------------------------ */
! function(e, t, s) {
    t(document).ready(function() {
        t("#sfadminmenu").accordion({
            heightStyle: "content",
            collapsible: !0,
            active: parseInt(sp_admin_footer_vars.panel)
        }), "desktop" == sp_platform_vars.device && 1 == sp_platform_vars.tooltips && t(document).tooltip({
            tooltipClass: "ttip",
            position: {
                my: "left+20 top",
                at: "left bottom+10"
            },
            track: !1
        }), t(".wp-submenu li").removeClass("current"), t(".wp-submenu li").find("a:contains(" + sp_admin_footer_vars.panel_name + ")").parent().addClass("current"), t("#sfmaincontainer").trigger("adminformloaded")
    }), t(document).on("click", 'input[name="SP_license_activate"]', function(e) {
        e.preventDefault();
        var s = t(this).parents("form").find('input[name="sp_sample_license_key"]').val(),
            n = t(this).parents("form").find(".sp_item_name").val(),
            a = t(this).parents("form").find('input[name="sp_itemn"]').val(),
            i = t(this).parents("form").find('input[name="sp_item_id"]').val();
        return t.ajax({
            type: "POST",
            dataType: "json",
            url: ajaxurl,
            data: {
                action: "license-check",
                licence_key: s,
                item_name: n,
                sp_item: a,
                sp_itemn_id: i,
                sp_action: "activate_license"
            },
            timeout: 7e5,
            success: function(e) {
                e.message && "" != e.message && (t("#sfmsgspot").fadeIn(), t("#sfmsgspot").html(e.message), t("#sfmsgspot").fadeOut(6e3)), setTimeout(function() {
                    t("#acclicensing").click()
                }, 4e3)
            },
            error: function(e, s, n) {
                "timeout" === s && (t("#sfmsgspot").html("Something Went Wrong Please Try Again!"), t("#sfmsgspot").fadeOut(6e3))
            },
            beforeSend: function() {
                t("#sfmsgspot").show(), t("#sfmsgspot").html(sp_platform_vars.pWait)
            },
            complete: function() {}
        }), !1
    }), t(document).on("click", 'input[name="SP_license_deactivate"]', function(e) {
        e.preventDefault();
        var s = t(this).parents("form").find('input[name="sp_sample_license_key"]').val(),
            n = t(this).parents("form").find(".sp_item_name").val(),
            a = t(this).parents("form").find('input[name="sp_itemn"]').val(),
            i = t(this).parents("form").find('input[name="sp_item_id"]').val();
        return t.ajax({
            type: "POST",
            dataType: "json",
            url: ajaxurl,
            data: {
                action: "license-check",
                licence_key: s,
                item_name: n,
                sp_item: a,
                sp_itemn_id: i,
                sp_action: "deactivate_license"
            },
            timeout: 7e5,
            success: function(e) {
                e.message && "" != e.message && (t("#sfmsgspot").fadeIn(), t("#sfmsgspot").html(e.message), t("#sfmsgspot").fadeOut(6e3)), setTimeout(function() {
                    t("#acclicensing").click()
                }, 4e3)
            },
            error: function(e, s, n) {
                "timeout" === s && (t("#sfmsgspot").html("Something Went Wrong Please Try Again!"), t("#sfmsgspot").fadeOut(6e3))
            },
            beforeSend: function() {
                t("#sfmsgspot").show(), t("#sfmsgspot").html(sp_platform_vars.pWait)
            },
            complete: function() {}
        }), !1
    }), t(document).on("click", 'input[name="save_store_url"]', function(e) {
        e.preventDefault();
        var s = t(this).parents("form").find('input[name="sp_sample_store_url"]').val();
        return t.ajax({
            type: "POST",
            dataType: "json",
            url: ajaxurl,
            data: {
                action: "license-check",
                sp_sample_store_url: s,
                sp_action: "save_store_url"
            },
            timeout: 7e5,
            success: function(e) {
                e.message && "" != e.message && (t("#sfmsgspot").fadeIn(), t("#sfmsgspot").html(e.message), t("#sfmsgspot").fadeOut(6e3)), setTimeout(function() {
                    t("#acclicensing").click()
                }, 4e3)
            },
            error: function(e, s, n) {
                "timeout" === s && (t("#sfmsgspot").html("Something Went Wrong Please Try Again!"), t("#sfmsgspot").fadeOut(6e3))
            },
            beforeSend: function() {
                t("#sfmsgspot").show(), t("#sfmsgspot").html(sp_platform_vars.pWait)
            },
            complete: function() {}
        }), !1
    }), t(document).on("click", '.spPluginUpdate', function (e) {
		e.preventDefault();
		var s = t(this).attr('data-site'),
                    ti = t(this).attr('data-href'),
                    tt = t(this).attr('data-label'),
                    th = this;
		return t.ajax({
			type: "POST",
			dataType: "json",
			url: ajaxurl,
			data: {
				action: "license-check",
				changelog_link: ti,
				sp_action: "changelog_link"
			},
			timeout: 7e5,
			success: function (e) {
                            
                           spj.dialogOpen(th, '', tt, '1000', 'auto', 'center', '', '', e.message);
			},
			error: function (e, s, n) {
				"timeout" === s && (t("#sfmsgspot").html("Something Went Wrong Please Try Again!"), t("#sfmsgspot").fadeOut(6e3))
			},
			beforeSend: function () {
				//t("#sfmsgspot").show(), t("#sfmsgspot").html(sp_platform_vars.pWait)
			},
			complete: function () {}
		}), !1
	});
}(window.spj = window.spj || {}, jQuery);