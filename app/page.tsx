import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Calm Pup Blog - Expert Anxious Puppy Training Advice',
  description: 'Proven techniques to calm your anxious puppy. Expert guides on separation anxiety, fear periods, training nervous puppies, and building confidence.',
};

export default function HomePage() {
  const categories = ['anxiety', 'separation-anxiety', 'training', 'behavior', 'confidence', 'socialization'];
  
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center">
            <div className="text-6xl mb-4">🐕</div>
            <h1 className="text-6xl font-bold text-slate-900 mb-6">
              The Calm Pup Blog
            </h1>
            <p className="text-2xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Expert advice for raising confident, calm puppies.
              <br />
              Science-backed techniques for anxious puppy training.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="https://thecalmpup.net"
                className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Shop Calming Products
              </a>
              <Link
                href="/anxiety"
                className="px-8 py-4 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-50 transition-colors border-2 border-slate-200"
              >
                Browse Articles
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
          Expert Puppy Training Guides
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Link
            href="/anxiety"
            className="group block p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all border border-slate-200 hover:border-blue-300"
          >
            <div className="text-5xl mb-4">😰</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
              Anxiety Solutions
            </h3>
            <p className="text-slate-600">
              Calm your anxious puppy with proven techniques and expert guidance
            </p>
            <div className="mt-4 text-blue-600 font-semibold group-hover:underline">
              Read guides →
            </div>
          </Link>

          <Link
            href="/separation-anxiety"
            className="group block p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all border border-slate-200 hover:border-blue-300"
          >
            <div className="text-5xl mb-4">🏠</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
              Separation Anxiety
            </h3>
            <p className="text-slate-600">
              Help your puppy feel secure when alone with systematic training
            </p>
            <div className="mt-4 text-blue-600 font-semibold group-hover:underline">
              Read guides →
            </div>
          </Link>

          <Link
            href="/training"
            className="group block p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all border border-slate-200 hover:border-blue-300"
          >
            <div className="text-5xl mb-4">🎓</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
              Training Methods
            </h3>
            <p className="text-slate-600">
              Gentle, effective training techniques for nervous puppies
            </p>
            <div className="mt-4 text-blue-600 font-semibold group-hover:underline">
              Read guides →
            </div>
          </Link>

          <Link
            href="/behavior"
            className="group block p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all border border-slate-200 hover:border-blue-300"
          >
            <div className="text-5xl mb-4">🐾</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
              Behavior Understanding
            </h3>
            <p className="text-slate-600">
              Learn about fear periods and developmental stages
            </p>
            <div className="mt-4 text-blue-600 font-semibold group-hover:underline">
              Read guides →
            </div>
          </Link>

          <Link
            href="/confidence"
            className="group block p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all border border-slate-200 hover:border-blue-300"
          >
            <div className="text-5xl mb-4">💪</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
              Building Confidence
            </h3>
            <p className="text-slate-600">
              Transform fearful puppies into confident, happy dogs
            </p>
            <div className="mt-4 text-blue-600 font-semibold group-hover:underline">
              Read guides →
            </div>
          </Link>

          <Link
            href="/socialization"
            className="group block p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all border border-slate-200 hover:border-blue-300"
          >
            <div className="text-5xl mb-4">🤝</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
              Safe Socialization
            </h3>
            <p className="text-slate-600">
              Proper exposure techniques without overwhelming your puppy
            </p>
            <div className="mt-4 text-blue-600 font-semibold group-hover:underline">
              Read guides →
            </div>
          </Link>
        </div>
      </div>

      <div className="bg-slate-900 text-white py-20 mt-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Why Trust The Calm Pup?
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-5xl mb-4">📚</div>
              <h3 className="text-xl font-bold mb-3">Expert-Written Guides</h3>
              <p className="text-slate-300">
                Science-backed training methods from certified dog behavior specialists
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">❤️</div>
              <h3 className="text-xl font-bold mb-3">Proven Results</h3>
              <p className="text-slate-300">
                Thousands of anxious puppies transformed into confident dogs
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🛍️</div>
              <h3 className="text-xl font-bold mb-3">Quality Products</h3>
              <p className="text-slate-300">
                Veterinarian-recommended calming aids and training tools
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <a
              href="https://thecalmpup.net"
              className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-bold text-lg transition-all shadow-lg"
            >
              Shop The Calm Pup Store →
            </a>
          </div>
        </div>
      </div>

      <footer className="bg-white border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center text-slate-600 text-sm">
          <p>© 2025 The Calm Pup. All rights reserved.</p>
          <p className="mt-2">
            <a href="https://thecalmpup.blog" className="hover:text-blue-600">Blog</a>
            {' • '}
            <a href="https://thecalmpup.net" className="hover:text-blue-600">Shop</a>
          </p>
        </div>
      </footer>
    </main>
  );
}
