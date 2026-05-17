export default function KhusiSansarWebsite() {
  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      {/* BACKGROUND EFFECTS */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-500/20 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-yellow-500/20 blur-[120px] rounded-full animate-pulse"></div>
      </div>

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">
          <h1 className="text-3xl font-black bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
            Khusi Sansar
          </h1>

          <div className="hidden md:flex gap-8 text-sm font-semibold">
            <a href="#home" className="hover:text-orange-400 transition-all">Home</a>
            <a href="#about" className="hover:text-orange-400 transition-all">About</a>
            <a href="#menu" className="hover:text-orange-400 transition-all">Menu</a>
            <a href="#payment" className="hover:text-orange-400 transition-all">Payments</a>
            <a href="#contact" className="hover:text-orange-400 transition-all">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center text-center overflow-hidden"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-pouring-coffee-1560081802144?download=1080p"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 px-6">
          <div className="mb-6 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-500/20 border border-orange-400/30 backdrop-blur-lg">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-ping"></span>
            <span className="text-sm tracking-widest uppercase">Open Daily 7AM - 8PM</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black leading-tight mb-6">
            <span className="bg-gradient-to-r from-white via-orange-300 to-yellow-400 bg-clip-text text-transparent">
              KHUSI
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-yellow-300 bg-clip-text text-transparent">
              SANSAR
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-gray-300 text-lg md:text-2xl leading-relaxed mb-10">
            Premium Coffee • Bakery • Fast Food • Happiness Experience in Tulsipur, Dang, Nepal • Rated 4.1★ by customers on Google Maps.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <button className="px-10 py-4 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 text-black font-bold text-lg hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,140,0,0.7)]">
              Order Online
            </button>

            <button className="px-10 py-4 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl font-semibold hover:bg-white/20 transition-all">
              Explore Menu
            </button>
          </div>
        </div>
      </section>

      {/* GOOGLE MAPS DETAILS BANNER */}
      <section className="py-10 px-6">
        <div className="max-w-7xl mx-auto rounded-[35px] overflow-hidden border border-orange-400/20 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 backdrop-blur-2xl">
          <div className="grid md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="p-8 text-center">
              <p className="text-orange-400 text-sm uppercase tracking-[5px] mb-3">Google Rating</p>
              <h2 className="text-5xl font-black">4.1★</h2>
              <p className="text-gray-400 mt-2">31 Customer Reviews</p>
            </div>

            <div className="p-8 text-center">
              <p className="text-orange-400 text-sm uppercase tracking-[5px] mb-3">Location</p>
              <h2 className="text-2xl font-bold">Tulsipur</h2>
              <p className="text-gray-400 mt-2">Dang, Nepal</p>
            </div>

            <div className="p-8 text-center">
              <p className="text-orange-400 text-sm uppercase tracking-[5px] mb-3">Price Range</p>
              <h2 className="text-3xl font-black">Rs. 1-500</h2>
              <p className="text-gray-400 mt-2">Affordable Luxury</p>
            </div>

            <div className="p-8 text-center">
              <p className="text-orange-400 text-sm uppercase tracking-[5px] mb-3">Opening Hours</p>
              <h2 className="text-3xl font-black">7AM - 8PM</h2>
              <p className="text-gray-400 mt-2">Open Everyday</p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            ['4.1★', 'Customer Rating'],
            ['31+', 'Happy Reviews'],
            ['24/7', 'Online Orders'],
            ['100%', 'Fresh Food'],
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center backdrop-blur-xl hover:-translate-y-2 hover:border-orange-400/40 transition-all"
            >
              <h2 className="text-4xl font-black text-orange-400 mb-3">{item[0]}</h2>
              <p className="text-gray-400">{item[1]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src="https://lh3.googleusercontent.com/p/AF1QipMeEQDn7wgxYPg-kSO5OE_q3sdedHUhe2QiAWYj=s762-k-no"
              className="rounded-[40px] shadow-2xl border border-white/10"
            />

            <div className="absolute -bottom-8 -right-8 bg-orange-500 text-black px-8 py-6 rounded-3xl font-black text-2xl shadow-2xl">
              Since 2026
            </div>
          </div>

          <div>
            <p className="uppercase tracking-[8px] text-orange-400 mb-4 text-sm">
              Luxury Cafe Experience
            </p>

            <h2 className="text-5xl md:text-6xl font-black leading-tight mb-8">
              More Than Just A Cafe.
            </h2>

            <p className="text-gray-400 text-lg leading-9 mb-10">
              Khusi Sansar is one of the most loved coffee shops, bakery and fast-food destinations in Tulsipur, Nepal. Designed with modern luxury vibes, cinematic ambience and delicious handcrafted meals.
            </p>

            <div className="grid grid-cols-2 gap-5">
              {['Premium Coffee', 'Luxury Bakery', 'Fast Delivery', 'Family Environment'].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-orange-400 transition-all"
                >
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="uppercase tracking-[8px] text-orange-400 mb-4 text-sm">
              Signature Menu
            </p>

            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Taste The Luxury
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: 'Premium Coffee',
                price: 'Rs. 250',
                img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop',
              },
              {
                title: 'Loaded Pizza',
                price: 'Rs. 650',
                img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop',
              },
              {
                title: 'Bakery Special',
                price: 'Rs. 350',
                img: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1974&auto=format&fit=crop',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative bg-white/5 border border-white/10 rounded-[35px] overflow-hidden hover:-translate-y-4 hover:border-orange-400/40 transition-all duration-500"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.img}
                    className="h-[350px] w-full object-cover group-hover:scale-110 transition-all duration-700"
                  />
                </div>

                <div className="p-8">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-bold">{item.title}</h3>
                    <span className="text-orange-400 font-black text-xl">
                      {item.price}
                    </span>
                  </div>

                  <div className="flex items-center justify-between mb-6 text-sm text-gray-400">
                    <span>★ 4.9 Rating</span>
                    <span>Fresh & Hot</span>
                  </div>

                  <button className="w-full py-4 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 text-black font-bold hover:scale-105 transition-all shadow-[0_0_35px_rgba(255,140,0,0.5)]">
                    Add To Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ORDER SECTION */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto bg-gradient-to-br from-orange-500/20 to-yellow-500/10 border border-orange-400/20 rounded-[40px] p-10 md:p-16 backdrop-blur-2xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="uppercase tracking-[8px] text-orange-400 mb-4 text-sm">
                Online Ordering
              </p>

              <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
                Fast Delivery. Instant Happiness.
              </h2>

              <p className="text-gray-300 text-lg leading-9 mb-10">
                Order directly from Khusi Sansar with luxury checkout experience and real-time payment support.
              </p>

              <div className="space-y-5">
                {['Fast Home Delivery', 'Pickup Available', 'Secure Online Payment', 'Real-Time Order Tracking'].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 bg-white/5 rounded-2xl p-5 border border-white/10"
                  >
                    <div className="w-4 h-4 rounded-full bg-orange-400 animate-pulse"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-black/40 rounded-[35px] border border-white/10 p-8 backdrop-blur-2xl">
              <h3 className="text-3xl font-black mb-8">Your Order</h3>

              <div className="space-y-5 mb-8">
                <div className="flex justify-between text-gray-300">
                  <span>Premium Coffee</span>
                  <span>Rs. 250</span>
                </div>

                <div className="flex justify-between text-gray-300">
                  <span>Loaded Pizza</span>
                  <span>Rs. 650</span>
                </div>

                <div className="flex justify-between text-gray-300">
                  <span>Bakery Special</span>
                  <span>Rs. 350</span>
                </div>
              </div>

              <div className="border-t border-white/10 pt-6 flex justify-between text-2xl font-black mb-8">
                <span>Total</span>
                <span className="text-orange-400">Rs. 1250</span>
              </div>

              <button className="w-full py-5 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 text-black text-lg font-black hover:scale-105 transition-all shadow-[0_0_45px_rgba(255,140,0,0.6)]">
                Proceed To Checkout
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* PAYMENT */}
      <section id="payment" className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="uppercase tracking-[8px] text-orange-400 mb-4 text-sm">
            Secure Payments
          </p>

          <h2 className="text-5xl md:text-6xl font-black mb-20">
            Payment Integrations
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                title: 'eSewa',
                img: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/ESewa_Logo.png',
              },
              {
                title: 'Khalti',
                img: 'https://khalti.com/static/img/logo1.png',
              },
              {
                title: 'Fonepay',
                img: 'https://fonepay.com/images/fonepay-payment-logo.png',
              },
              {
                title: 'Bank Transfer',
                img: 'https://cdn-icons-png.flaticon.com/512/2830/2830284.png',
              },
            ].map((payment, index) => (
              <div
                key={index}
                className="group bg-white/5 border border-white/10 rounded-[35px] p-10 backdrop-blur-xl hover:border-orange-400/40 hover:-translate-y-3 transition-all"
              >
                <div className="h-28 flex items-center justify-center mb-6">
                  <img
                    src={payment.img}
                    className="max-h-20 group-hover:scale-110 transition-all"
                  />
                </div>

                <h3 className="text-2xl font-bold">{payment.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REAL CAFE GALLERY */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="uppercase tracking-[8px] text-orange-400 mb-4 text-sm">
              Real Cafe Experience
            </p>

            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Khusi Sansar Gallery
            </h2>

            <p className="max-w-3xl mx-auto text-gray-400 text-lg leading-8">
              Real images from the official Khusi Sansar Google Maps business profile are integrated directly into the premium frontend experience for authentic branding and visual presentation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {[
              'https://lh3.googleusercontent.com/p/AF1QipMeEQDn7wgxYPg-kSO5OE_q3sdedHUhe2QiAWYj=s762-k-no',
              'https://lh3.googleusercontent.com/p/AF1QipOLtfKPBqh14lkIGfpZOxphv25upWdMI754N_dx=s572-k-no',
              'https://lh3.googleusercontent.com/gps-cs-s/APNQkAFoXciIQn94mbtdZyYSde0p7h2kvVutqOiGwvmSgsYtqSm2raB3ORwt7lAPjSVcERMinS0kPsr2P5VmVbzWifDQKV51zi5kXSybFIOirFugB6x-9CNtLvLW7-0vUSiuciS8pLo=s435-k-no',
            ].map((img, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[35px] border border-white/10"
              >
                <img
                  src={img}
                  className="h-[420px] w-full object-cover group-hover:scale-110 transition-all duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Khusi Sansar</h3>
                    <p className="text-gray-300">Luxury Cafe Ambience</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-orange-500/20 to-yellow-500/10 rounded-[35px] p-10 border border-orange-400/20 backdrop-blur-2xl">
              <h3 className="text-4xl font-black mb-6">Why Customers Love Khusi Sansar?</h3>

              <div className="space-y-5 text-gray-300 text-lg">
                <div className="flex gap-4 items-start">
                  <div className="w-3 h-3 rounded-full bg-orange-400 mt-3"></div>
                  <p>Modern premium cafe ambience with cozy seating.</p>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-3 h-3 rounded-full bg-orange-400 mt-3"></div>
                  <p>Fresh bakery items, premium coffee and fast food.</p>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-3 h-3 rounded-full bg-orange-400 mt-3"></div>
                  <p>Trusted by local customers with 4.1★ Google rating.</p>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-3 h-3 rounded-full bg-orange-400 mt-3"></div>
                  <p>Perfect place for family gatherings and hangouts.</p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[35px] border border-white/10 min-h-[400px]">
              <iframe
                src="https://maps.google.com/maps?q=Khusi%20Sansar%20Tulsipur&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="absolute inset-0 w-full h-full"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-7xl mx-auto bg-white/5 border border-white/10 rounded-[40px] overflow-hidden backdrop-blur-2xl">
          <div className="grid md:grid-cols-2">
            <div className="p-10 md:p-16">
              <p className="uppercase tracking-[8px] text-orange-400 mb-4 text-sm">
                Contact & Location
              </p>

              <h2 className="text-5xl font-black mb-10">
                Visit Khusi Sansar
              </h2>

              <div className="space-y-8 text-lg text-gray-300">
                <div>
                  <h3 className="text-orange-400 font-bold mb-2">Address</h3>
                  <p>47MW+3VJ, Tulsipur 22412, Dang, Nepal</p>
                </div>

                <div>
                  <h3 className="text-orange-400 font-bold mb-2">Phone</h3>
                  <p>+977 9769276700</p>
                </div>

                <div>
                  <h3 className="text-orange-400 font-bold mb-2">Opening Hours</h3>
                  <p>Open Daily: 7:00 AM - 8:00 PM</p>
                </div>

                <div>
                  <h3 className="text-orange-400 font-bold mb-2">Services</h3>
                  <p>Coffee Shop • Bakery • Fast Food Restaurant • Online Ordering Available • Digital Payments Supported</p>
                </div>
              </div>
            </div>

            <iframe
              src="https://maps.google.com/maps?q=Khusi%20Sansar&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[500px]"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 text-center px-6">
        <h2 className="text-4xl font-black bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent mb-4">
          Khusi Sansar
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          Premium coffee shop, bakery and fast food restaurant in Tulsipur, Nepal.
        </p>

        <div className="flex justify-center gap-5 mb-8">
          {['Facebook', 'Instagram', 'TikTok'].map((social, index) => (
            <button
              key={index}
              className="px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-orange-400 hover:text-orange-400 transition-all"
            >
              {social}
            </button>
          ))}
        </div>

        <p className="text-gray-500 text-sm">
          © 2026 Khusi Sansar. All Rights Reserved.
        </p>
      </footer>
    </div>
  )
}
