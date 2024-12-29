#3) classmethod და staticmethod
#Python-ში კლასში განსხვავებული მეთოდები არსებობს: instance method, class method და static method. ეს მეთოდები კლასის და მისი ობიექტების ურთიერთობის სხვადასხვა ასპექტებს ასახავენ.

#Instance method: ეს არის ყველაზე გავრცელებული მეთოდი. ის გამოიყენება კლასის ობიექტებზე სამუშაოდ და ამ ობიექტის ატრიბუტებს წვდომას საჭიროებს. პირველი პარამეტრი self არის ობიექტი (instance), რომლის მეშვეობითაც ხდება შესაბამისი მონაცემების (ატრიბუტების) წვდომა.

#მაგალითი:


class Car:
    def __init__(self, make, model):
        self.make = make
        self.model = model

    def display_info(self):
        print(f'{self.make} {self.model}')

car = Car("Toyota", "Corolla")
car.display_info()  