using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using AWP22.Models;

namespace AWP22.Controllers
{
    public class HomeController : Controller
    {
        AWPEntities db = new AWPEntities();
        public ActionResult Home()
        {
            Class1 model = new Class1();
            model.functions = db.functions.ToList();
            model.products = db.products.ToList();
            model.offers = db.offers.ToList();
            model.users = db.users.ToList();

            return View(model);
        }

        public ActionResult Login()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Login(user objUser)
        {
            if (ModelState.IsValid)
            {
                using ( AWPEntities db = new AWPEntities())
                {
                    var obj = db.users.Where(a => a.user_name.Equals(objUser.user_name) && a.password.Equals(objUser.password)).FirstOrDefault();
                    if (obj != null)
                    {
                        Session["UserID"] = obj.id.ToString();
                        Session["UserName"] = obj.user_name.ToString();
                        Session["UserRole"] = obj.user_role_admin.ToString().Trim();
                        return RedirectToAction("Index");
                    }
                }
            }
            return View(objUser);
        }

        public ActionResult Index()
        {
            if (Session["UserID"] != null)
            {
                Class1 model = new Class1();
                model.functions = db.functions.ToList();
                model.products = db.products.ToList();
                model.offers = db.offers.ToList();
                model.users = db.users.ToList();
                if (Session["UserRole"].ToString() =="1")
                    return View(model);
                else
                    return RedirectToAction("Home");
            }
            else
            {
                return RedirectToAction("Login");
            }
        }
    }
}