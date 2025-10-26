import { useEffect, useRef } from 'react';

const SpaceBG = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!canvas || !ctx) return;

    let animationFrameId;
    let mouseX = 0;
    let mouseY = 0;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Redraw stars on resize
      createStars()
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const STAR_COUNT = 200;
    let stars = [];
    let shootingStars = [];

    const starColors = ['#ffffff', '#ffe9c4', '#d4fbff', '#ffd1dc', '#c2e9fb'];

    const getRandomColor = () => {
      return starColors[Math.floor(Math.random() * starColors.length)];
    };

    const createStars = () => {
      stars = [];
      for (let i = 0; i < STAR_COUNT; i++) {
        const depth = Math.random(); // 0 = far, 1 = close
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: depth * 1.5 + 0.5,
          velocity: depth * 0.4 + 0.05,
          alpha: Math.random() * 0.5 + 0.5,
          alphaChange: Math.random() * 0.02,
          depth,
          color: getRandomColor(),
        });
      }
    };

    const createShootingStar = () => {
      const angle = Math.random() * Math.PI / 3 - Math.PI / 6; // between -30 and +30 degrees
      const speed = Math.random() * 10 + 6;
      shootingStars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height / 2, // top half of screen
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        length: Math.random() * 80 + 50,
        life: 0,
        maxLife: 50,
        color: 'white',
      });
    };

    createStars();

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // Draw regular stars
      for (let star of stars) {
        const parallaxX = (mouseX - centerX) * star.depth * 0.02;
        const parallaxY = (mouseY - centerY) * star.depth * 0.02;

        star.y += star.velocity;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }

        star.alpha += star.alphaChange;
        if (star.alpha <= 0.3 || star.alpha >= 1) {
          star.alphaChange = -star.alphaChange;
        }

        ctx.beginPath();
        ctx.arc(star.x + parallaxX, star.y + parallaxY, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${star.color}${Math.floor(star.alpha * 255).toString(16).padStart(2, '0')}`; // Add alpha to hex
        ctx.fill();
      }

      // Draw shooting stars
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const s = shootingStars[i];
        s.x += s.vx;
        s.y += s.vy;
        s.life++;

        // Draw trail
        const trailLength = s.length;
        const gradient = ctx.createLinearGradient(s.x, s.y, s.x - s.vx * trailLength, s.y - s.vy * trailLength);
        gradient.addColorStop(0, 'white');
        gradient.addColorStop(1, 'transparent');

        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x - s.vx * trailLength, s.y - s.vy * trailLength);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.stroke();

        if (s.life > s.maxLife) {
          shootingStars.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleClick = () => {
      createShootingStar();
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 bg-black w-full h-full z-[-1]"
    />
  );
};

export default SpaceBG;
