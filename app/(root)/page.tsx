import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Check,
  Cpu,
  Eye,
  FileEdit,
  Globe,
  MessageSquare,
  MousePointerClick,
  Send,
  Shield,
  Sparkles,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className='min-h-screen bg-gray-950 text-gray-100 overflow-x-hidden'>
      {/* Navigation */}
      <nav className='border-b border-gray-800'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            <div className='flex items-center'>
              <div className='flex-shrink-0 flex items-center'>
                <Sparkles className='h-6 w-6 text-indigo-500' />
                <span className='ml-2 text-xl font-bold'>CollabDocs</span>
              </div>
            </div>
            <div className='hidden md:block'>
              <div className='ml-10 flex items-center space-x-4'>
                <Link
                  href='#features'
                  className='px-3 py-2 rounded-md text-sm font-medium hover:text-indigo-400'
                >
                  Features
                </Link>
                <Link
                  href='#how-it-works'
                  className='px-3 py-2 rounded-md text-sm font-medium hover:text-indigo-400'
                >
                  How It Works
                </Link>
                <Link
                  href='#security'
                  className='px-3 py-2 rounded-md text-sm font-medium hover:text-indigo-400'
                >
                  Security
                </Link>
              </div>
            </div>
            <div>
              <Link href='/home'>
                <Button className='bg-indigo-600 hover:bg-indigo-700'>
                  Get Started <ArrowRight className='ml-2 h-4 w-4' />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className='relative overflow-hidden'>
        <div className='max-w-7xl mx-auto'>
          <div className='relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32'>
            <main className='mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28'>
              <div className='sm:text-center lg:text-left'>
                <h1 className='text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl'>
                  <span className='block'>Real-time Collaborative</span>
                  <span className='block text-indigo-400'>
                    Document Editing
                  </span>
                </h1>
                <p className='mt-3 text-base text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0'>
                  Create, share, and collaborate on documents with your team in
                  real-time. Experience the power of live cursors, comments, and
                  notifications.
                </p>
                <div className='mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start'>
                  <div className='rounded-md shadow'>
                    <Link href='/home'>
                      <Button className='w-full bg-indigo-600 hover:bg-indigo-700 px-8 py-3 text-base font-medium md:py-4 md:text-lg md:px-10'>
                        Start Collaborating
                      </Button>
                    </Link>
                  </div>
                  <div className='mt-3 sm:mt-0 sm:ml-3'>
                    <Link href='#features'>
                      <Button
                        variant='outline'
                        className='w-full px-8 py-3 text-base font-medium md:py-4 md:text-lg md:px-10 text-black'
                      >
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className='lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>
          <div className='h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-full bg-gradient-to-r from-indigo-900/20 to-purple-900/20 rounded-l-xl flex items-center justify-center'>
            <div className='relative w-4/5 h-4/5 bg-gray-900 border border-gray-800 rounded-lg shadow-2xl overflow-hidden'>
              {/* Mock document editor */}
              <div className='absolute inset-0 p-4'>
                <div className='h-8 bg-gray-800 rounded mb-4'></div>
                <div className='h-4 bg-gray-800 rounded w-3/4 mb-2'></div>
                <div className='h-4 bg-gray-800 rounded w-5/6 mb-2'></div>
                <div className='h-4 bg-gray-800 rounded w-2/3 mb-4'></div>

                <div className='flex items-center mb-2'>
                  <div className='h-8 w-8 rounded-full bg-indigo-500 mr-2'></div>
                  <div className='h-4 bg-indigo-500/30 rounded w-32'></div>
                </div>

                <div className='h-4 bg-gray-800 rounded w-full mb-2'></div>
                <div className='h-4 bg-gray-800 rounded w-5/6 mb-2'></div>
                <div className='h-4 bg-gray-700 rounded w-1/2 mb-4'></div>

                <div className='relative'>
                  <div className='h-4 bg-gray-800 rounded w-full mb-2'></div>
                  <div className='absolute -right-4 top-0 h-16 w-16 bg-gray-800 border border-gray-700 rounded-lg p-2'>
                    <div className='h-3 bg-gray-700 rounded mb-1'></div>
                    <div className='h-2 bg-gray-700 rounded w-3/4'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section id='features' className='py-12 bg-gray-900/50 sm:py-16 lg:py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h2 className='text-3xl font-extrabold sm:text-4xl'>
              Powerful Collaboration Features
            </h2>
            <p className='mt-4 max-w-2xl text-xl text-gray-400 mx-auto'>
              Everything you need for seamless document collaboration
            </p>
          </div>

          <div className='mt-10'>
            <div className='space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 lg:grid-cols-3'>
              {/* Feature 1 */}
              <div className='relative bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-indigo-500 transition-all'>
                <div className='absolute -top-5 left-6 h-10 w-10 rounded-md bg-indigo-600 flex items-center justify-center'>
                  <FileEdit className='h-5 w-5 text-white' />
                </div>
                <h3 className='mt-6 text-lg font-medium'>Real-time Editing</h3>
                <p className='mt-2 text-base text-gray-400'>
                  See changes as they happen with live cursors showing where
                  others are working.
                </p>
              </div>

              {/* Feature 2 */}
              <div className='relative bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-indigo-500 transition-all'>
                <div className='absolute -top-5 left-6 h-10 w-10 rounded-md bg-indigo-600 flex items-center justify-center'>
                  <MessageSquare className='h-5 w-5 text-white' />
                </div>
                <h3 className='mt-6 text-lg font-medium'>
                  Contextual Comments
                </h3>
                <p className='mt-2 text-base text-gray-400'>
                  Add comments to specific text, resolve discussions, and react
                  with emojis.
                </p>
              </div>

              {/* Feature 3 */}
              <div className='relative bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-indigo-500 transition-all'>
                <div className='absolute -top-5 left-6 h-10 w-10 rounded-md bg-indigo-600 flex items-center justify-center'>
                  <Send className='h-5 w-5 text-white' />
                </div>
                <h3 className='mt-6 text-lg font-medium'>Notifications</h3>
                <p className='mt-2 text-base text-gray-400'>
                  Stay updated with real-time notifications for comments,
                  mentions, and edits.
                </p>
              </div>

              {/* Feature 4 */}
              <div className='relative bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-indigo-500 transition-all'>
                <div className='absolute -top-5 left-6 h-10 w-10 rounded-md bg-indigo-600 flex items-center justify-center'>
                  <Globe className='h-5 w-5 text-white' />
                </div>
                <h3 className='mt-6 text-lg font-medium'>Shareable Links</h3>
                <p className='mt-2 text-base text-gray-400'>
                  Share documents via email with customizable permissions for
                  viewing and editing.
                </p>
              </div>

              {/* Feature 5 */}
              <div className='relative bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-indigo-500 transition-all'>
                <div className='absolute -top-5 left-6 h-10 w-10 rounded-md bg-indigo-600 flex items-center justify-center'>
                  <Eye className='h-5 w-5 text-white' />
                </div>
                <h3 className='mt-6 text-lg font-medium'>Role-based Access</h3>
                <p className='mt-2 text-base text-gray-400'>
                  Control who can view, edit, or delete documents based on user
                  roles.
                </p>
              </div>

              {/* Feature 6 */}
              <div className='relative bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-indigo-500 transition-all'>
                <div className='absolute -top-5 left-6 h-10 w-10 rounded-md bg-indigo-600 flex items-center justify-center'>
                  <Shield className='h-5 w-5 text-white' />
                </div>
                <h3 className='mt-6 text-lg font-medium'>Secure & Reliable</h3>
                <p className='mt-2 text-base text-gray-400'>
                  Built with Clerk for auth and Sentry for monitoring to ensure
                  security and performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id='how-it-works'
        className='py-12 bg-gray-900 sm:py-16 lg:py-20'
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='lg:text-center'>
            <h2 className='text-3xl font-extrabold sm:text-4xl'>
              How It Works
            </h2>
            <p className='mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto'>
              Get started in just a few simple steps
            </p>
          </div>

          <div className='mt-10'>
            <div className='relative'>
              <div
                className='absolute inset-0 flex items-center'
                aria-hidden='true'
              >
                <div className='w-full border-t border-gray-800'></div>
              </div>
              <div className='relative flex justify-between flex-wrap items-center gap-y-5'>
                <div className='flex items-center'>
                  <span className='h-9 flex items-center'>
                    <span className='relative z-10 w-8 h-8 flex items-center justify-center bg-indigo-600 rounded-full'>
                      <span className='h-2.5 w-2.5 bg-indigo-100 rounded-full'></span>
                    </span>
                  </span>
                  <span className='ml-4 text-sm font-medium text-indigo-400'>
                    Sign up
                  </span>
                </div>
                <div className='flex items-center'>
                  <span className='h-9 flex items-center'>
                    <span className='relative z-10 w-8 h-8 flex items-center justify-center bg-gray-800 border-2 border-indigo-600 rounded-full'>
                      <span className='h-2.5 w-2.5 bg-indigo-600 rounded-full'></span>
                    </span>
                  </span>
                  <span className='ml-4 text-sm font-medium text-gray-400'>
                    Create document
                  </span>
                </div>
                <div className='flex items-center'>
                  <span className='h-9 flex items-center'>
                    <span className='relative z-10 w-8 h-8 flex items-center justify-center bg-gray-800 border-2 border-indigo-600 rounded-full'>
                      <span className='h-2.5 w-2.5 bg-indigo-600 rounded-full'></span>
                    </span>
                  </span>
                  <span className='ml-4 text-sm font-medium text-gray-400'>
                    Invite collaborators
                  </span>
                </div>
                <div className='flex items-center'>
                  <span className='h-9 flex items-center'>
                    <span className='relative z-10 w-8 h-8 flex items-center justify-center bg-gray-800 border-2 border-indigo-600 rounded-full'>
                      <span className='h-2.5 w-2.5 bg-indigo-600 rounded-full'></span>
                    </span>
                  </span>
                  <span className='ml-4 text-sm font-medium text-gray-400'>
                    Collaborate in real-time
                  </span>
                </div>
              </div>
            </div>

            <div className='mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
              <div className='bg-gray-900/50 p-6 rounded-lg border border-gray-800'>
                <h3 className='text-lg font-medium'>1. Sign Up</h3>
                <p className='mt-2 text-sm text-gray-400'>
                  Create your account using secure authentication powered by
                  Clerk.
                </p>
              </div>
              <div className='bg-gray-900/50 p-6 rounded-lg border border-gray-800'>
                <h3 className='text-lg font-medium'>2. Create Document</h3>
                <p className='mt-2 text-sm text-gray-400'>
                  Start a new document or import existing content to begin
                  collaborating.
                </p>
              </div>
              <div className='bg-gray-900/50 p-6 rounded-lg border border-gray-800'>
                <h3 className='text-lg font-medium'>3. Invite Team</h3>
                <p className='mt-2 text-sm text-gray-400'>
                  Share via email with customizable permissions for each
                  collaborator.
                </p>
              </div>
              <div className='bg-gray-900/50 p-6 rounded-lg border border-gray-800'>
                <h3 className='text-lg font-medium'>4. Collaborate</h3>
                <p className='mt-2 text-sm text-gray-400'>
                  Work together with live cursors, comments, and real-time
                  updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id='security' className='py-12 bg-gray-900/50 sm:py-16 lg:py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='lg:grid lg:grid-cols-12 lg:gap-8'>
            <div className='sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left'>
              <h2 className='text-3xl font-extrabold sm:text-4xl'>
                Built with Security in Mind
              </h2>
              <p className='mt-3 text-lg text-gray-400 sm:mt-5'>
                Your data is protected with enterprise-grade security features
                and continuous monitoring.
              </p>
              <div className='mt-8'>
                <div className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700'>
                  Learn more about security
                </div>
              </div>
            </div>
            <div className='mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center'>
              <div className='relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md'>
                <div className='relative bg-gray-900 p-8 rounded-lg border border-gray-800'>
                  <div className='flex items-center mb-6'>
                    <Shield className='h-8 w-8 text-indigo-500' />
                    <h3 className='ml-3 text-xl font-medium'>
                      Security Features
                    </h3>
                  </div>
                  <ul className='space-y-4'>
                    <li className='flex items-start'>
                      <div className='flex-shrink-0'>
                        <Check className='h-5 w-5 text-green-500' />
                      </div>
                      <p className='ml-3 text-sm text-gray-400'>
                        End-to-end encrypted document storage
                      </p>
                    </li>
                    <li className='flex items-start'>
                      <div className='flex-shrink-0'>
                        <Check className='h-5 w-5 text-green-500' />
                      </div>
                      <p className='ml-3 text-sm text-gray-400'>
                        Secure authentication with Clerk
                      </p>
                    </li>
                    <li className='flex items-start'>
                      <div className='flex-shrink-0'>
                        <Check className='h-5 w-5 text-green-500' />
                      </div>
                      <p className='ml-3 text-sm text-gray-400'>
                        Real-time performance monitoring with Sentry
                      </p>
                    </li>
                    <li className='flex items-start'>
                      <div className='flex-shrink-0'>
                        <Check className='h-5 w-5 text-green-500' />
                      </div>
                      <p className='ml-3 text-sm text-gray-400'>
                        Role-based access control
                      </p>
                    </li>
                    <li className='flex items-start'>
                      <div className='flex-shrink-0'>
                        <Check className='h-5 w-5 text-green-500' />
                      </div>
                      <p className='ml-3 text-sm text-gray-400'>
                        Activity logs for all changes
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className='py-12 bg-gray-900 sm:py-16 lg:py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h2 className='text-3xl font-extrabold sm:text-4xl'>
              Powered by Modern Technology
            </h2>
            <p className='mt-4 max-w-2xl text-xl text-gray-400 mx-auto'>
              Built with the best tools for performance and reliability
            </p>
          </div>
          <div className='mt-10 grid grid-cols-2 gap-8 md:grid-cols-4'>
            <div className='col-span-1 flex justify-center bg-gray-900/50 p-6 rounded-lg border border-gray-800'>
              <div className='flex items-center'>
                <Cpu className='h-8 w-8 text-indigo-500' />
                <span className='ml-3 text-lg font-medium'>Next.js 14</span>
              </div>
            </div>
            <div className='col-span-1 flex justify-center bg-gray-900/50 p-6 rounded-lg border border-gray-800'>
              <div className='flex items-center'>
                <MousePointerClick className='h-8 w-8 text-indigo-500' />
                <span className='ml-3 text-lg font-medium'>shadcn/ui</span>
              </div>
            </div>
            <div className='col-span-1 flex justify-center bg-gray-900/50 p-6 rounded-lg border border-gray-800'>
              <div className='flex items-center'>
                <Shield className='h-8 w-8 text-indigo-500' />
                <span className='ml-3 text-lg font-medium'>Clerk</span>
              </div>
            </div>
            <div className='col-span-1 flex justify-center bg-gray-900/50 p-6 rounded-lg border border-gray-800'>
              <div className='flex items-center'>
                <Sparkles className='h-8 w-8 text-indigo-500' />
                <span className='ml-3 text-lg font-medium'>Sentry</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='bg-indigo-900/20'>
        <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between'>
          <h2 className='text-3xl font-extrabold tracking-tight sm:text-4xl'>
            <span className='block'>Ready to dive in?</span>
            <span className='block text-indigo-400'>
              Start collaborating today.
            </span>
          </h2>
          <div className='mt-8 flex lg:mt-0 lg:flex-shrink-0'>
            <div className='inline-flex rounded-md shadow'>
              <Link href='/home'>
                <Button className='bg-indigo-600 hover:bg-indigo-700 px-8 py-3 text-base font-medium md:py-4 md:text-lg md:px-10'>
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-gray-900/50 border-t border-gray-800'>
        <div className='max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8'>
          <nav
            className='-mx-5 -my-2 flex flex-wrap justify-center'
            aria-label='Footer'
          >
            <div className='px-5 py-2'>
              <Link
                href='#features'
                className='text-base text-gray-400 hover:text-indigo-400'
              >
                Features
              </Link>
            </div>
            <div className='px-5 py-2'>
              <Link
                href='#how-it-works'
                className='text-base text-gray-400 hover:text-indigo-400'
              >
                How It Works
              </Link>
            </div>
            <div className='px-5 py-2'>
              <Link
                href='#security'
                className='text-base text-gray-400 hover:text-indigo-400'
              >
                Security
              </Link>
            </div>
            <div className='px-5 py-2'>
              <Link
                href='#'
                className='text-base text-gray-400 hover:text-indigo-400'
              >
                Privacy
              </Link>
            </div>
            <div className='px-5 py-2'>
              <Link
                href='#'
                className='text-base text-gray-400 hover:text-indigo-400'
              >
                Terms
              </Link>
            </div>
          </nav>
          <p className='mt-8 text-center text-base text-gray-400'>
            &copy; {new Date().getFullYear()} CollabDocs. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
