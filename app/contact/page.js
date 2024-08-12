import React from 'react';
import Layout from '@/components/Layout';

const ContactPage: React.FC<any> = () => {
    const [formState, setFormState] = useState<any>({
        name: '',
        email: '',
        message: ''
    });

    const inlineStyle = {
        marginTop: '20px',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        backgroundColor: '#f9f9f9'
    };

    useEffect(() => {
        console.log('Contact page successfully loaded');
    }, []);

    const handleSubmit = (event: any) => {
        event.preventDefault();
        alert('Form submitted. We will get back to you soon!');
    };

    const handleChange = (event: any) => {
        const { name, value } = event.target;
        setFormState((prevState: any) => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
      <Layout>
          <h1 style={{ textAlign: 'center', color: 'darkblue' }}>Contact Us</h1>

          <div style={{ ...inlineStyle, marginBottom: '30px' }}>
              <h2>Contact Person: Sherlock Holmes</h2>
              <p>
                  <strong>Email:</strong> sherlock.holmes@bakerstreet.com
              </p>
              <p>
                  <strong>Phone:</strong> +44 20 7946 0958
              </p>
              <p>
                  <strong>Address:</strong> 221B Baker Street, London, NW1 6XE, England
              </p>
              <p>
                  If you have any inquiries or need assistance, please don't hesitate to contact Mr. Holmes.
              </p>
          </div>

          <form onSubmit={handleSubmit} style={inlineStyle}>
              <div style={{ marginBottom: '10px' }}>
                  <label>Name:</label>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    style={{ marginLeft: '10px', padding: '5px', width: '300px' }}
                  />
              </div>
              <div style={{ marginBottom: '10px' }}>
                  <label>Email:</label>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    style={{ marginLeft: '10px', padding: '5px', width: '300px' }}
                  />
              </div>
              <div style={{ marginBottom: '10px' }}>
                  <label>Message:</label>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    style={{ display: 'block', width: '300px', height: '100px', padding: '5px' }}
                  />
              </div>
              <button type="submit" style={{ backgroundColor: 'blue', color: 'white', padding: '10px 20px' }}>
                  Submit
              </button>
          </form>
      </Layout>
    );
};

export default ContactPage;