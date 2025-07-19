import Link from "next/link"
import { Brain, Twitter, Linkedin, Github, Mail } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <Brain className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">AI Enterprise</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Empowering businesses with cutting-edge AI solutions. Transform your operations, 
              gain insights, and drive growth with our comprehensive AIaaS platform.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-3 text-gray-400">
              <li><Link href="/machine-learning" className="hover:text-white transition-colors">Machine Learning</Link></li>
              <li><Link href="/nlp" className="hover:text-white transition-colors">Natural Language Processing</Link></li>
              <li><Link href="/computer-vision" className="hover:text-white transition-colors">Computer Vision</Link></li>
              <li><Link href="/predictive-analytics" className="hover:text-white transition-colors">Predictive Analytics</Link></li>
              <li><Link href="/automation" className="hover:text-white transition-colors">Process Automation</Link></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold mb-4">Solutions</h3>
            <ul className="space-y-3 text-gray-400">
              <li><Link href="/enterprise" className="hover:text-white transition-colors">Enterprise AI</Link></li>
              <li><Link href="/healthcare" className="hover:text-white transition-colors">Healthcare</Link></li>
              <li><Link href="/finance" className="hover:text-white transition-colors">Financial Services</Link></li>
              <li><Link href="/retail" className="hover:text-white transition-colors">Retail & E-commerce</Link></li>
              <li><Link href="/manufacturing" className="hover:text-white transition-colors">Manufacturing</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-gray-400">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/press" className="hover:text-white transition-colors">Press</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 AI Enterprise Solutions. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/security" className="hover:text-white transition-colors">Security</Link>
              <Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer