import { useEffect, useId, useState } from "react";
import { auth, storage } from "../firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { ref, uploadBytes } from "firebase/storage";
import uuid from "react-uuid";

function Home() {
  const navigate = useNavigate();

  const [image, setImage] = useState(null);

  const id = uuid();

  console.log(id);

  const handleUploadImage = async () => {
    // 참조(파일이 저장될 경로)를 만든다.
    const imageRef = ref(storage, `profile/${id}_${image.name}`);

    // 위에서 만든 참조와 파일을 인자로 전달한다.
    const result = await uploadBytes(imageRef, image);

    navigate(`/profile?name=${result.metadata.name}`);
  };
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // 로그인 되어 있음
        console.log(user);
        // 전역 상태로 유저 정보 관리하기. => redux, recoil, Context API 등...
        if (!user.emailVerified) {
          alert("너 인증해야됨");
        }
      } else {
        console.log("로그아웃");
        navigate("/login");
      }
    });
  }, [navigate]);

  return (
    <div>
      <h1>로그인 성공!</h1>
      <button onClick={() => signOut(auth)}>로그아웃</button>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
      />
      <button onClick={handleUploadImage}>사진 등록</button>
    </div>
  );
}

export default Home;
