using System;
using System.Collections.Generic;
using System.Text;

namespace lab11
{
    class User: person
    {
        public string userName;
        private string _password;
        public string setPW;
        public string confirmPW;
        public string resetPW;
        public User(string name, string surname, string pw) : base( name, surname)
        {
            this._password = pw;
        }
    }
}
