import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

export default function GoogleAuth() {
  const handleSuccess = async (credentialResponse) => {
    const token = credentialResponse.credential;

    const user = jwtDecode(token);

    const res = await axios.post("http://localhost:5000/api/auth/google", {
      token,
    });

  };

  const handleError = () => {
  };

  return (
    <div>
      <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
    </div>
  );
}