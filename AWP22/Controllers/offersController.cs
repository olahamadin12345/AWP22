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
    public class offersController : Controller
    {
        private AWPEntities db = new AWPEntities();

        // GET: offers
        public ActionResult Index()
        {
            return View(db.offers.ToList());
        }

        // GET: offers/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            offer offer = db.offers.Find(id);
            if (offer == null)
            {
                return HttpNotFound();
            }
            return View(offer);
        }

        // GET: offers/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: offers/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "offer_id,offer_name,offer_description,offer_imageurl")] offer offer, HttpPostedFileBase ImageData)
        {
            if (ModelState.IsValid)
            {
                string name = Path.GetFileName(ImageData.FileName);
                string path = "~/images/offer/" + name;

                //Saving file to Folder
                ImageData.SaveAs(Server.MapPath(path));
                offer.offer_imageurl = path.Replace("~", "").Trim();
                db.offers.Add(offer);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(offer);
        }

        // GET: offers/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            offer offer = db.offers.Find(id);
            if (offer == null)
            {
                return HttpNotFound();
            }
            return View(offer);
        }

        // POST: offers/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "offer_id,offer_name,offer_description,offer_imageurl")] offer offer, HttpPostedFileBase ImageData)
        {
            if (ModelState.IsValid)
            {
                string name = Path.GetFileName(ImageData.FileName);
                string path = "~/images/offer/" + name;

                //Saving file to Folder
                ImageData.SaveAs(Server.MapPath(path));
                offer.offer_imageurl = path.Replace("~", "").Trim();
                db.Entry(offer).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(offer);
        }

        // GET: offers/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            offer offer = db.offers.Find(id);
            if (offer == null)
            {
                return HttpNotFound();
            }
            return View(offer);
        }

        // POST: offers/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            offer offer = db.offers.Find(id);
            db.offers.Remove(offer);
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
