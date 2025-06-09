import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-hot-text mb-4">Contact</h3>
            <a
              href="mailto:contact@heartsoftomorrow.org"
              className="text-hot-text hover:text-hot-red transition-colors duration-200"
            >
              contact@heartsoftomorrow.org
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-hot-text mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-hot-text hover:text-hot-red transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/opportunities" className="text-hot-text hover:text-hot-red transition-colors duration-200">
                  Get Involved
                </Link>
              </li>
              <li>
                <Link href="/collaborate" className="text-hot-text hover:text-hot-red transition-colors duration-200">
                  Partner With Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Social & Quote */}
          <div>
            <h3 className="text-lg font-semibold text-hot-text mb-4">Connect</h3>
            <div className="flex space-x-4 mb-6">
              <a
                href="https://instagram.com/heartsoftomorrow"
                target="_blank"
                rel="noopener noreferrer"
                className="text-hot-text hover:text-hot-red transition-colors duration-200"
                aria-label="Instagram"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://ko-fi.com/heartsoftomorrow"
                target="_blank"
                rel="noopener noreferrer"
                className="text-hot-text hover:text-hot-red transition-colors duration-200"
                aria-label="Ko-fi"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.881 8.948c-.773-4.085-4.859-4.593-4.859-4.593h-15.127c-.604 0-1.141.535-1.141 1.14v14.545c0 .604.536 1.141 1.141 1.141h15.126c3.762 0 4.951-3.483 4.951-3.483s.751-2.017.751-3.484c0-1.418-.474-2.39-.842-3.266zm-1.033 6.517c-.568 2.074-2.488 2.932-2.488 2.932h-13.886v-11.856h13.886s2.488.396 2.488 2.932c0 2.537-2.488 2.932-2.488 2.932s2.488.396 2.488 2.932v.128zm-7.425-7.123c-.736 0-1.459.209-1.459.209v4.416s.882.209 1.459.209c1.226 0 1.459-.875 1.459-1.459 0-.583-.233-1.458-1.459-1.458v-1.749c1.226 0 1.459-.875 1.459-1.458 0-.584-.233-1.459-1.459-1.459z"/>
                </svg>
              </a>
            </div>
            <p className="text-hot-text italic">"Small steps save lives."</p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-100 text-center">
          <p className="text-sm text-hot-text">
            © {new Date().getFullYear()} Hearts of Tomorrow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 