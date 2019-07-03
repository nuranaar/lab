using System;
using System.Collections.Generic;
using System.Text;

namespace lab11
{
    abstract class person
    {
        public string name;
        public string surmane;
        private DateTime _birthday;


        public string Birthday(string Birthday)
        {
            this._birthday = DateTime.ParseExact(Birthday, "dd.MM.yyyy", CultureInfo.InvariantCulture);
        }

        public DateTime Birthday (DateTime Birthday)
        {
            this._birthday = Birthday;
        }
        public person(string Name, string Surname)
        {
            this.name = Name;
            this.name = Surname;
        }
        public int GetAge()
        {
            return Convert.ToInt32(Math.Floor(DateTime.Now.Subtract(this.Birthday).TotalDays / 365));
        }
    }


    
}
