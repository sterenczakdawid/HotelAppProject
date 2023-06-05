import { Link } from "react-router-dom";

export const Statute = () => {
	return (
		<>
			<header>
				<div
					className={`flex items-center justify-center flex-col bg-gray-200 h-[400px] bg-statute bg-cover bg-no-repeat bg-center relative z-0 text-white`}>
					<div className="absolute w-full h-full bg-black/[.70] -z-10" />
					<div className="flex flex-col content-center items-center z-5">
						<h1 className="p-10 text-7xl font-['Dancing_Script']">
							Regulamin hotelu
						</h1>
					</div>
				</div>
			</header>
			<div className="bg-white p-10">
				<section className="bg-white text-left px-[5%] md:px-[15%] py-10">
					<ol>
						<li className="p-5 pt-10 text-3xl font-bold text-center">
							§ 1. Definicje
						</li>
						<ol>
							<li>
								<span className="font-bold">1. </span>
								VCHotel: Hotel VCHotel znajdujący się pod adresem Plac
								Politechniki 1, 00-661 Warszawa.
							</li>
							<li>
								<span className="font-bold">2. </span>
								Gość: Osoba dokonująca rezerwacji i korzystająca z usług
								oferowanych przez VCHotel.
							</li>
							<li>
								<span className="font-bold">3. </span>
								Pokój: Indywidualna jednostka zakwaterowania oferowana przez
								VCHotel.
							</li>
							<li>
								<span className="font-bold">4. </span>
								Rezerwacja: Proces dokonywania i potwierdzania rezerwacji pokoju
								w VCHotel.
							</li>
						</ol>

						<li className="p-5 pt-10 text-3xl font-bold text-center">
							§ 2. Rezerwacje
						</li>
						<ol>
							<li>
								<span className="font-bold">1. </span>
								Goście mogą dokonywać rezerwacji poprzez kontakt telefoniczny
								pod numerem +48 111 222 333 lub drogą elektroniczną na adres
								e-mail vcwwa@hotel.com.
							</li>
							<li>
								<span className="font-bold">2. </span>
								Rezerwacje są przyjmowane na zasadzie "kto pierwszy, ten lepszy"
								i są potwierdzane w miarę dostępności wolnych pokoi.
							</li>
							<li>
								<span className="font-bold">3. </span>W przypadku rezerwacji
								grupowych lub długoterminowych, mogą obowiązywać dodatkowe
								warunki ustalone indywidualnie.
							</li>
							<li>
								<span className="font-bold">4. </span>
								Podczas dokonywania rezerwacji Gość zobowiązany jest do podania
								swoich danych kontaktowych oraz informacji niezbędnych do
								dokonania płatności.
							</li>
						</ol>

						<li className="p-5 pt-10 text-3xl font-bold text-center">
							§ 3. Potwierdzenie Rezerwacji
						</li>
						<ol>
							<li>
								<span className="font-bold">1. </span>
								VCHotel dokona potwierdzenia rezerwacji na podany przez Gościa
								numer telefonu lub adres e-mail.
							</li>
							<li>
								<span className="font-bold">2. </span>
								Gość zobowiązany jest do potwierdzenia rezerwacji w określonym
								terminie, w przeciwnym razie VCHotel zastrzega sobie prawo do
								anulowania rezerwacji.
							</li>
						</ol>

						<li className="p-5 pt-10 text-3xl font-bold text-center">
							§ 4. Płatności
						</li>
						<ol>
							<li>
								<span className="font-bold">1. </span>
								Opłaty za pokoje i inne usługi świadczone przez VCHotel są
								ustalane w momencie rezerwacji.
							</li>
							<li>
								<span className="font-bold">2. </span>
								Gość zobowiązany jest do uiszczenia pełnej płatności przed
								rozpoczęciem pobytu, chyba że ustalono inaczej.
							</li>
							<li>
								<span className="font-bold">3. </span>
								VCHotel zastrzega sobie prawo do blokady środków na karcie
								kredytowej Gościa przed przyjazdem lub pobraniu zadatku jako
								zabezpieczenie płatności.
							</li>
						</ol>

						<li className="p-5 pt-10 text-3xl font-bold text-center">
							§ 5. Anulowanie Rezerwacji
						</li>
						<ol>
							<li>
								<span className="font-bold">1. </span> Gość może anulować
								rezerwację zgodnie z ustalonymi warunkami anulacji, które są
								określane podczas dokonywania rezerwacji.
							</li>
							<li>
								<span className="font-bold">2. </span> W przypadku niepojawienia
								się Gościa w dniu zameldowania bez uprzedniego powiadomienia o
								anulacji, VCHotel obciąży Gościa pełną opłatą za pierwszą noc
								pobytu.
							</li>
						</ol>

						<li className="p-5 pt-10 text-3xl font-bold text-center">
							§ 6. Zameldowanie i wymeldowanie
						</li>
						<ol>
							<li>
								<span className="font-bold">1. </span>Zameldowanie możliwe jest
								od godziny 16:00.
							</li>
							<li>
								<span className="font-bold">2. </span>Wymeldowanie należy
								dokonać do godziny 12:00.
							</li>
							<li>
								<span className="font-bold">3. </span>W przypadku późniejszego
								wymeldowania niż godzina 12:00, VCHotel zastrzega sobie prawo do
								obciążenia dodatkowymi opłatami za opóźniony wymeldowanie.
							</li>
						</ol>

						<li className="p-5 pt-10 text-3xl font-bold text-center">
							§ 7. Obowiązki Gościa
						</li>
						<ol>
							<li>
								<span className="font-bold">1. </span>
								Gość zobowiązany jest do przestrzegania regulaminu VCHotel oraz
								wszelkich instrukcji i zaleceń personelu.
							</li>
							<li>
								<span className="font-bold">2. </span>
								Gość ponosi pełną odpowiedzialność za wszelkie szkody wyrządzone
								na terenie VCHotel wynikające z jego działalności lub
								działalności osób, które przebywają w hotelu za jego zgodą.
							</li>
						</ol>

						<li className="p-5 pt-10 text-3xl font-bold text-center">
							§ 8. Ograniczenia i Zasady Korzystania
						</li>
						<ol>
							<li>
								<span className="font-bold">1. </span>W pokojach hotelowych
								obowiązuje całkowity zakaz palenia.
							</li>
							<li>
								<span className="font-bold">2. </span>
								Zwierzęta domowe są akceptowane za dodatkową opłatą 70zł za
								każde zwierzę.
							</li>
							<li>
								<span className="font-bold">3. </span>
								Korzystanie z usług VCHotel wiąże się z szacunkiem dla innych
								Gości i personelu. Zachowanie nadmiernej hałaśliwości może
								skutkować ograniczeniami w korzystaniu z usług lub wydaleniem z
								hotelu.
							</li>
						</ol>

						<li className="p-5 pt-10 text-3xl font-bold text-center">
							§ 9. Odpowiedzialność VCHotel
						</li>
						<ol>
							<li>
								<span className="font-bold">1. </span>
								VCHotel nie ponosi odpowiedzialności za straty, kradzieże lub
								uszkodzenia mienia Gościa.
							</li>
							<li>
								<span className="font-bold">2. </span>
								VCHotel zastrzega sobie prawo do zmiany przypisanych pokoi lub
								dostępności niektórych usług z powodu nieprzewidzianych
								okoliczności.
							</li>
						</ol>

						<li className="p-5 pt-10 text-3xl font-bold text-center">
							§ 10. Postanowienia Końcowe
						</li>
						<ol>
							<li>
								<span className="font-bold">1. </span>
								VCHotel zastrzega sobie prawo do zmiany regulaminu w dowolnym
								momencie. Zmiany regulaminu obowiązują od momentu ich
								opublikowania na stronie internetowej hotelu.
							</li>
							<li>
								<span className="font-bold">2. </span>W przypadku konfliktu
								między Gościem a VCHotel, obie strony powinny dążyć do
								rozwiązania sporu drogą negocjacji.
							</li>
							<li>
								<span className="font-bold">3. </span>W przypadku naruszenia
								regulaminu przez Gościa, VCHotel ma prawo do natychmiastowego
								wydalenia Gościa z hotelu bez zwrotu płatności.
							</li>
						</ol>
					</ol>
				</section>

				<Link
					to="/"
					className="m-10 border rounded-lg p-3 bg-white hover:bg-black hover:text-white transition duration-300">
					Powrót do strony głównej
				</Link>
			</div>
		</>
	);
};
