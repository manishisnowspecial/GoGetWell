import React, { useState } from 'react';
import Lottie from 'lottie-react';
import { useNavigate } from 'react-router-dom';

// Healthcare animation data
const healthcareAnimation = {
  v: "5.7.14",
  fr: 60,
  ip: 0,
  op: 180,
  w: 512,
  h: 512,
  nm: "Healthcare",
  ddd: 0,
  assets: [],
  layers: [
    {
      ty: 4,
      nm: "Heart",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        p: { a: 0, k: [256, 256] },
        a: { a: 0, k: [0, 0, 0] },
        s: {
          a: 1,
          k: [
            {
              t: 0,
              s: [100, 100],
              e: [110, 110]
            },
            {
              t: 90,
              s: [110, 110],
              e: [100, 100]
            },
            {
              t: 180,
              s: [100, 100]
            }
          ]
        }
      },
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "rc",
              d: 1,
              s: { a: 0, k: [100, 100] },
              p: { a: 0, k: [0, 0] },
              r: { a: 0, k: 20 }
            },
            {
              ty: "fl",
              c: { a: 0, k: [0.125, 0.553, 0.553] }
            }
          ]
        }
      ],
      op: 180
    },
    {
      ty: 4,
      nm: "Cross",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        p: { a: 0, k: [256, 256] },
        a: { a: 0, k: [0, 0, 0] },
        s: {
          a: 1,
          k: [
            {
              t: 0,
              s: [0, 0],
              e: [100, 100]
            },
            {
              t: 30,
              s: [100, 100]
            }
          ]
        }
      },
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "rc",
              d: 1,
              s: { a: 0, k: [20, 80] },
              p: { a: 0, k: [0, 0] },
              r: { a: 0, k: 5 }
            },
            {
              ty: "rc",
              d: 1,
              s: { a: 0, k: [80, 20] },
              p: { a: 0, k: [0, 0] },
              r: { a: 0, k: 5 }
            },
            {
              ty: "fl",
              c: { a: 0, k: [1, 1, 1] }
            }
          ]
        }
      ],
      op: 180
    }
  ]
};

function Demo() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [animationError, setAnimationError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      // Here you would typically make an API call to your backend
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      navigate('/dashboard', { state: { email } });
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-br from-cyan-50 to-white px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-sm sm:max-w-md bg-white rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col items-center">
        <div className="w-full max-w-[280px] sm:max-w-xs mb-4 sm:mb-6">
          {!animationError ? (
            <Lottie
              onError={() => setAnimationError(true)}
              animationData={healthcareAnimation}
              loop
              autoplay
              style={{ height: '160px', width: '100%' }}
              aria-label="Healthcare AI Animation"
              rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
            />
          ) : (
            <div className="h-[160px] w-full flex items-center justify-center bg-cyan-50 rounded-lg">
              <svg className="w-16 h-16 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 12.5l6 6 9-13.5" />
              </svg>
            </div>
          )}
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-cyan-700 mb-2 sm:mb-4 text-center">Get Started with GoGetWell</h2>
        <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 text-center">Experience the future of healthcare management. Join thousands of satisfied users today!</p>
        
        <form onSubmit={handleSubmit} className="w-full space-y-3 sm:space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-sm sm:text-base"
              placeholder="you@example.com"
              required
            />
          </div>
          
          {error && <div className="text-red-500 text-xs sm:text-sm text-center">{error}</div>}
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-cyan-600 to-cyan-500 text-white font-semibold py-2 px-4 rounded-lg shadow hover:from-cyan-700 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
          >
            {isSubmitting ? 'Processing...' : 'Start Free Trial'}
          </button>
          
          <div className="relative my-4 sm:my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-xs sm:text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>
          
          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 font-semibold py-2 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 transition-all text-sm sm:text-base"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 48 48"><g><path fill="#4285F4" d="M44.5 20H24v8.5h11.7C34.7 33.9 29.9 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 6 .9 8.3 2.7l6.2-6.2C34.2 4.5 29.4 3 24 3 12.4 3 3 12.4 3 24s9.4 21 21 21c10.5 0 20-7.5 20-21 0-1.3-.1-2.7-.3-4z"/><path fill="#34A853" d="M6.3 14.7l7 5.1C15.5 16.1 19.4 13 24 13c3.1 0 6 .9 8.3 2.7l6.2-6.2C34.2 4.5 29.4 3 24 3c-7.2 0-13 5.8-13 13 0 2.1.5 4.1 1.3 5.7z"/><path fill="#FBBC05" d="M24 44c5.9 0 10.7-1.9 14.3-5.1l-6.6-5.4C29.7 35.5 27 36.5 24 36.5c-5.9 0-10.7-3.9-12.4-9.1l-7 5.4C7.5 41.5 15.1 44 24 44z"/><path fill="#EA4335" d="M44.5 20H24v8.5h11.7C34.7 33.9 29.9 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 6 .9 8.3 2.7l6.2-6.2C34.2 4.5 29.4 3 24 3 12.4 3 3 12.4 3 24s9.4 21 21 21c10.5 0 20-7.5 20-21 0-1.3-.1-2.7-.3-4z"/></g></svg>
            Sign up with Google
          </button>
        </form>
        
        <p className="text-center mt-4 text-xs sm:text-sm text-gray-600">
          By signing up, you agree to our{' '}
          <a href="/terms" className="text-cyan-600 hover:text-cyan-700">Terms of Service</a>
          {' '}and{' '}
          <a href="/privacy" className="text-cyan-600 hover:text-cyan-700">Privacy Policy</a>
        </p>
      </div>
    </div>
  );
}

export default Demo; 