module.exports = {
    isLoginAdmin: (req, res, next) => {
        if (req.session.user == null || req.session.user == undefined) {
            req.flash("alertMessage", `Mohon maaf, anda belum login`);
            req.flash("alertStatus", "danger");
            res.redirect("/");
        } else {
            next();
        }
    }
}