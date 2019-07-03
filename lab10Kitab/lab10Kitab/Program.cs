using System;

namespace lab10Kitab
{
    class Program
    {
        static void Main(string[] args)
        {
            Book book = new Book("Don Kixot", 15);

            int select = 0;
            do
            {
                Console.WriteLine("==========================");
                Console.WriteLine("1. Kitabin adi nedir?");
                Console.WriteLine("2. Kitabin yazari kimdir?");
                Console.WriteLine("3. Kitabin yazarini geyd et..");
                Console.WriteLine("4. Kitabin giymeti");
                Console.WriteLine("5. Kitabin endirimi giymeti");
                Console.WriteLine("6. Endirim faizini daxil edin");
                Console.WriteLine("0. EXIT");
                Console.WriteLine("==========================");

                select = Convert.ToInt32(Console.ReadLine());
                switch (select)
                {
                    case 1:
                        Console.WriteLine("==========================");
                        Console.WriteLine("Kitabin adi '{0}'.", book.Name );
                        break;
                    case 2:
                        Console.WriteLine("==========================");
                        if (book.Author == null)
                        {
                            Console.WriteLine("Kitabon yazari geyd edilmeyib.");
                        }

                        break;
                    case 3:
                        Console.WriteLine("==========================");
                        if (book.Author == null)
                        {
                            Console.WriteLine("Kitabin yazari:");
                            book.Author = Console.ReadLine();
                        }
                        else
                        {
                            Console.WriteLine("Kitabin yazari {0} kimi geyd olunub. Deyiwmek isteyirsinizmi?(y/n)", book.Author);
                            string cvb = Console.ReadLine();
                            while (cvb != "y" && cvb != "n")
                            {
                                Console.WriteLine("Seciminiz y ve ya n ola biler.");
                                cvb = Console.ReadLine();
                            }
                            if (cvb == "y")
                            {
                                Console.WriteLine("Kitabin yazari:");
                                book.Author = Console.ReadLine();
                            }
                        }
                        break;

                    case 4:
                        Console.WriteLine("==========================");
                        Console.WriteLine("Kitabin giymeti" + book.Price);
                        break;

                    case 5:
                        Console.WriteLine("==========================");

                        if (book.SalePrice == 0)
                        {
                            Console.WriteLine("Kitab endirimde deyil.");
                        }
                        else
                        {
                            Console.WriteLine("Kitabin endirim gitmeti:" +book.SalePrice);
                        }
                        break;

                    case 6:
                        Console.WriteLine("Fizi daxil edin:");
                        break;
                    case 0:
                        break;

                    default:
                        Console.WriteLine("==========================");
                        Console.WriteLine("Seciminiz duzgun deyil!");
                        break;
                }


            }
            while (select != 0);
        }
    }
}
