import Image from "next/image";
import logo from "@/app/asstes/logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#043873] text-white py-12 px-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        {/* Logo and Paragraph */}
        <div className="flex-1">
          <Image src={logo} alt="Company Logo" width={150} height={40} />
          <p className="mt-4 text-sm">
            Empowering teams to achieve their goals with our project management solutions. Collaborate, organize, and succeed together.
          </p>
        </div>

        {/* Lists Section */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          {/* List 1 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li className="hover:underline cursor-pointer">Overview</li>
              <li className="hover:underline cursor-pointer">Product</li>
              <li className="hover:underline cursor-pointer">Customer Services</li>
            </ul>
          </div>

          {/* List 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li className="hover:underline cursor-pointer">Blog</li>
              <li className="hover:underline cursor-pointer">Help Center</li>
              <li className="hover:underline cursor-pointer">Guide & Tutorial</li>
            </ul>
          </div>

          {/* List 3 */}
         
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li className="hover:underline cursor-pointer">About Us</li>
              <li className="hover:underline cursor-pointer">Careers</li>
              <li className="hover:underline cursor-pointer">Media Kit</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
