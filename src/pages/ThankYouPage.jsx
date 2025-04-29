import CheckCircleIcon from '@mui/icons-material/CheckCircle';


const ThankYouPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-darkBlue to-lightBlue flex items-center justify-center px-6">
      <div className="bg-white p-10 rounded-2xl shadow-2xl max-w-md text-center">
        <CheckCircleIcon className="text-green-500 mx-auto mb-4" size={48} />
        <h1 className="text-3xl font-bold text-darkBlue mb-2">Thank You!</h1>
        <p className="text-gray-700 mb-6">
          We've received your submission. Our team will contact you shortly.
        </p>
        <a
          href="/"
          className="inline-block bg-darkBlue text-white px-6 py-3 rounded-lg hover:bg-[#000040] transition"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default ThankYouPage;
