export default function Footer() {
  return (
    <div className="container mx-auto py-8 text-center">
      <ul className="flex justify-center gap-8">
        <li>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            About
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Gallery
          </a>
        </li>
         <li>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Contact
          </a>
        </li>
      </ul>
      <ul className="flex justify-center gap-8 mt-4">
        <li>
          <a
            href="mailto:email@gmail.com"
            className="text-gray-600 hover:text-gray-900"
          >
            email@gmail.com
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com/toys_shop"
            className="text-gray-600 hover:text-gray-900"
          >
            instagram: @toys_shop
          </a>
        </li>
      </ul>
    </div>
  );
}
