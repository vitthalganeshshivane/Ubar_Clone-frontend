import { Link } from "react-router-dom";

function Start() {
  return (
    <div>
      <div className="bg-cover bg-center bg-[url(https://plus.unsplash.com/premium_photo-1736867129397-b1a4071d70a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dHJhZmZpY2xpZ2h0fGVufDB8fDB8fHww)] h-screen pt-8  w-full flex justify-between flex-col">
        <img
          className="w-16 ml-5"
          src="https://thumbs.dreamstime.com/b/vroom-pop-art-comic-speech-bubbles-book-sound-effects-vector-illustration-258767749.jpg"
          alt=""
        />
        <div className="bg-white pb-7 py-4 px-4">
          <h2 className="text-[30px] font-bold">Get Started with Ubar</h2>
          <Link
            to="/login"
            className="flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Start;
