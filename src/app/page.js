import { redirect } from 'next/navigation';

export default function HomePage() {
  // Redirect the home page to the login page
  redirect('/signup');
}
