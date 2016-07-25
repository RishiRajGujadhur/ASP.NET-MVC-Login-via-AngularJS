using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MVCWithAngular.Controllers
{
    public class DataController : Controller
    {
        //Fetch Last Contact
        public JsonResult GetLastContact()
        {
            Contact c = null;

            //here MyDatabaseEntities our DBContext
            using (MyDatabaseEntities dc = new MyDatabaseEntities())
            {
                c = dc.Contacts.OrderByDescending(a => a.ContactID).Take(1).FirstOrDefault();
            }
            return new JsonResult { Data = c, JsonRequestBehavior = JsonRequestBehavior.AllowGet };
        }
        
    }
}