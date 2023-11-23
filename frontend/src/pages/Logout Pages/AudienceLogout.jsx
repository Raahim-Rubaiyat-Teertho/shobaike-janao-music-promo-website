export default function AudienceLogout () {
    localStorage.removeItem('username');
    window.location.href = '/';
}