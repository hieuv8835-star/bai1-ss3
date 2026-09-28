
const customerName = "Tran Thi Mai";
const customerAge = 20;
const movieRating = "T18";
const seatType = "VIP";
const isStudent = true;
const isWeekday = true;

// 2. Hằng số giá vé cơ sở
const BASE_PRICE = 80000;

// 3. Kiểm tra độ tuổi
if (movieRating === "T18" && customerAge < 18) {
    console.warn(
        "GIAO DICH THAT BAI: Khach hang duoi 18 tuoi khong duoc phep xem phim nhan T18!"
    );
} else {
    // 4. Khai báo biến xử lý
    let surcharge = 0;
    let seatName = "";
    let isValidSeat = true;

    // 5. Xác định phụ thu theo loại ghế
    switch (seatType) {
        case "STANDARD":
            surcharge = 0;
            seatName = "Ghe Thuong";
            break;

        case "VIP":
            surcharge = 15000;
            seatName = "Ghe VIP";
            break;

        case "COUPLE":
            surcharge = 40000;
            seatName = "Ghe Doi Couple";
            break;

        default:
            console.error("GIAO DICH THAT BAI: Loai ghe khong hop le!");
            isValidSeat = false;
    }

    // 6. Chỉ tiếp tục tính tiền nếu loại ghế hợp lệ
    if (isValidSeat === true) {
        // 7. Tính chiết khấu
        let discountPercent;

        if (isStudent === true && isWeekday === true) {
            discountPercent = 20;
        } else {
            discountPercent = 0;
        }

        // 8. Tính giá vé
        const ticketPrice = BASE_PRICE + surcharge;
        const discountAmount = (ticketPrice * discountPercent) / 100;
        const finalPayment = ticketPrice - discountAmount;

        // 9. Gán quà tặng bằng toán tử ba ngôi
        const giftMessage =
            seatType === "COUPLE"
                ? "Tang 01 ly nuoc ngot co lon"
                : "Khong ap dung qua tang";

        // 10. Xác định trạng thái độ tuổi
        const ratingStatus =
            movieRating === "T18" && customerAge >= 18
                ? "Hop le"
                : "Hop le";

        // 11. Xuất hóa đơn
        console.log(`
========================================
       HOA DON BAN VE CINEMA CGV
========================================
Khach hang: ${customerName}
Do tuoi: ${customerAge} | Nhan phim: ${movieRating} (${ratingStatus})
Hang ghe: ${seatName}
Gia ve co so: ${BASE_PRICE} VND
Phu thu ghe: ${surcharge} VND
Tong gia ve goc: ${ticketPrice} VND
Chiet khau HSSV (${discountPercent}%): -${discountAmount} VND
----------------------------------------
TONG TIEN THANH TOAN: ${finalPayment} VND
Uu dai di kem: ${giftMessage}
========================================
`);
    }
}
