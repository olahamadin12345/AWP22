using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.IO;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using AWP22.Models;

namespace AWP22.Controllers
{
    public class functionsController : Controller
    {
        private AWPEntities db = new AWPEntities();

        // GET: functions
        public ActionResult Index()
        {
            return View(db.functions.ToList());
        }

        // GET: functions/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            function function = db.functions.Find(id);
            if (function == null)
            {
                return HttpNotFound();
            }
            return View(function);
        }

        // GET: functions/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: functions/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "function_id,function_name,function_icon")] function function, HttpPostedFileBase ImageData)
        {
            if (ModelState.IsValid)
            {
                string name = Path.GetFileName(ImageData.FileName);
                string path = "~/images/function/" + name;

                //Saving file to Folder
                ImageData.SaveAs(Server.MapPath(path));
                function.function_icon = path.Replace("~", "").Trim();
                db.functions.Add(function);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(function);
        }

        // GET: functions/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            function function = db.functions.Find(id);
            if (function == null)
            {
                return HttpNotFound();
            }
            return View(function);
        }

        // POST: functions/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "function_id,function_name,function_icon")] function function, HttpPostedFileBase ImageData)
        {
            if (ModelState.IsValid)
            {
                string name = Path.GetFileName(ImageData.FileName);
                string path = "~/images/function/" + name;

                //Saving file to Folder
                ImageData.SaveAs(Server.MapPath(path));
                function.function_icon = path.Replace("~", "").Trim();
                db.Entry(function).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(function);
        }

        // GET: functions/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            function function = db.functions.Find(id);
            if (function == null)
            {
                return HttpNotFound();
            }
            return View(function);
        }

        // POST: functions/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            function function = db.functions.Find(id);
            db.functions.Remove(function);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
