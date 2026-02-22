# Eliana - React JS Portfolio Template
#### Preview

 - [Demo](https://themewagon.github.io/eliana-react/)

#### Download
 - [Download from ThemeWagon](https://themewagon.com/themes/eliana-react/)

## Getting Started

1. Clone Repository
```
git clone https://github.com/themewagon/eliana-react.git
```
2. Install Dependencies
```
npm i
```
3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Author 
```
Design and code is completely written by PrebuiltUI and development team. 
```

## License

 - Design and Code is Copyright &copy; <a href="https://prebuiltui.com/" target="_blank">PrebuiltUI</a>
 - Licensed cover under [MIT]
 - Distributed by <a href="https://themewagon.com" target="_blank">ThemeWagon</a>


## router from react-router-dom
- pake <BrowserRouter> di main.jsx buat nge warp routernya
- di app.jsx pakein <Routes> buat inisialisasi router, trus pakein <Route> buat tau page mana yg mau bisa di navigaskan, "path=" buat navigasinya /apa contoh /about berarti ntar di browser tinggal tambahin aja /about biar bisa lgsg ke halaman about
-nah cara pake routernya kamu gaperlu pake tag angkor (<a>) tapi pake function <Link> dari routernya trus pake atribut "to=" buat ngelink ke navigasinya



## penambahan animasi pindah page
- install "npm install framer-motion"
- gunakan pada app.jsx dengan component <AnimatePresence> lalu sesuaikan atribute
- tambahkan const location pada app.jsx yg berisi useLocation() from react router
- pake di routes "location={location} key={location.pathname}"
- setelah itu pada setiap page atau component diberi <motion.div> untuk animasi transisi

## penyesuaian margin untuk header ke content
- tambahkan <div> sebelum <AnimatePresence> dengan classname yg tertera pada code

