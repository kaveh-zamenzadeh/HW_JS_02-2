let birthDay = null;
const kavehCurrentAge=+prompt("enter age")
birthDay = 2022 - kavehCurrentAge;
if ( kavehCurrentAge < 18) {
    document.write("تو زیر 18هستی")
} else if ( kavehCurrentAge <= 20) {
    document.write("تو نوجوان هستی")
} else if ( kavehCurrentAge >= 20) {
    document.write("شما بزرگسال هستید ")
}

birthDay = 56 + kavehCurrentAge;
document.write("و شما در 56 سال آینده"+ birthDay+"سن دارید")
 
 