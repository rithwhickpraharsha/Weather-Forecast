import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import {  useNavigate } from 'react-router-dom';
import {  useSetRecoilState } from 'recoil';
import { UserData } from '../StateManagement/userinfo';

export default function Login(){
const client_Id  = import.meta.env.VITE_GOOGLE_CLIENT_SECRET_ID;
const setUser = useSetRecoilState(UserData);
const navigate = useNavigate();



return(
<GoogleOAuthProvider clientId={client_Id}>
<GoogleLogin
  onSuccess={credentialResponse => {
    const info : any = jwtDecode(credentialResponse.credential || "");
    console.log(info);
    const userData = {
        name : info.given_name,
        picture : info.picture
    }
    setUser(userData);
    navigate('/weather');
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>
</GoogleOAuthProvider>
)

}