export default function ArtistLogout () {
    localStorage.removeItem('username');
    window.location.href = '/';
}