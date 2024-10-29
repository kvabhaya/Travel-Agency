import React, { useState, useEffect } from "react";
import styled from "styled-components";
import avatarImage from "../assets/Avatar-img.png";
import { db } from "../firebaseConfig";
import { collection, addDoc, getDocs } from 'firebase/firestore';

const Testimonials = () => {
  const [visibleTestimonials, setVisibleTestimonials] = useState(6);
  const [testimonials, setTestimonials] = useState([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState(0);

  // Fetch testimonials from Firestore
  useEffect(() => {
    const fetchTestimonials = async () => {
      const testimonialsCollection = collection(db, 'testimonials'); // Assuming you have a 'testimonials' collection
      const testimonialSnapshot = await getDocs(testimonialsCollection);
      const testimonialList = testimonialSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTestimonials(testimonialList);
    };

    fetchTestimonials();
  }, []);

  const handleSeeMore = () => {
    setVisibleTestimonials((prev) => prev + 3); // Show 3 more testimonials on click
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !text || rating <= 0) {
      alert("Please fill in all fields and select a rating.");
      return;
    }

    const newTestimonial = {
      text,
      name,
      title: "Customer", // Placeholder for title; modify as needed
      rating,
    };

    try {
      const docRef = await addDoc(collection(db, 'testimonials'), newTestimonial);
      setTestimonials((prev) => [...prev, { id: docRef.id, ...newTestimonial }]);
      setName("");
      setText("");
      setRating(0);
    } catch (error) {
      console.error("Error adding testimonial: ", error);
    }
  };

  return (
      <Section id="testimonials">
        <div className="title">
          <h2>Happy Customers</h2>
        </div>
        <div className="testimonials">
          {testimonials.slice(0, visibleTestimonials).map((testimonial) => (
              <div className="testimonial" key={testimonial.id}>
                <p>{testimonial.text}</p>
                <div className="info">
                  <img src={avatarImage} alt="" />
                  <div className="details">
                    <h4>{testimonial.name}</h4>
                    <span>{testimonial.title}</span>
                  </div>
                </div>
              </div>
          ))}
        </div>
        {visibleTestimonials < testimonials.length && (
            <button className="see-more" onClick={handleSeeMore}>
              See More
            </button>
        )}

        <Form onSubmit={handleSubmit}>
          <h3>Submit Your Review</h3>
          <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
          />
          <textarea
              placeholder="Your Review"
              value={text}
              onChange={(e) => setText(e.target.value)}
              required
          />
          <div className="rating">
            <span>Rate Us:</span>
            {[1, 2, 3, 4, 5].map((star) => (
                <Star
                    key={star}
                    onClick={() => setRating(star)}
                    isSelected={star <= rating}
                >
                  ★
                </Star>
            ))}
          </div>
          <button type="submit">Submit Review</button>
        </Form>
      </Section>
  );
};

const Section = styled.section`
  margin: 5rem 0;

  .title {
    text-align: center;
    margin-bottom: 2rem;
  }

  .testimonials {
    display: flex;
    justify-content: center;
    margin: 0 2rem;
    gap: 2rem;
    flex-wrap: wrap;

    .testimonial {
      background-color: aliceblue;
      padding: 2rem;
      border-radius: 0.5rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      transition: 0.3s ease-in-out;
      width: 300px;
      height: 200px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      text-align: center;

      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }

      .info {
        display: flex;
        justify-content: center;
        gap: 1rem;
        align-items: center;
        margin-top: 1rem;

        img {
          border-radius: 50%;
          height: 60px;
          width: 60px;
        }

        .details {
          span {
            font-size: 0.9rem;
          }
        }
      }
    }
  }

  .see-more {
    display: block;
    margin: 2rem auto; /* Centering the button */
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 0.3rem;
    cursor: pointer;
    font-size: 1rem;

    &:hover {
      background-color: #0056b3;
    }
  }

  @media screen and (max-width: 768px) {
    .testimonials {
      flex-direction: column;
      align-items: center;
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;

  input, textarea {
    width: 300px;
    margin-bottom: 1rem;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.3rem;

    &:focus {
      border-color: #007bff;
      outline: none;
    }
  }

  .rating {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    span {
      margin-right: 1rem;
    }
  }

  button {
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 0.3rem;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

const Star = styled.span`
  cursor: pointer;
  font-size: 1.5rem;
  color: ${({ isSelected }) => (isSelected ? "gold" : "gray")};
`;

export default Testimonials;
