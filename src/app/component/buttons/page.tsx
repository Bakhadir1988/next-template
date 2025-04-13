'use client';

import React from 'react';

import { Button } from '@/shared/ui/button';

const Buttons = () => {
  return (
    <>
      <div
        className="container"
        style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}
      >
        {/* Основная кнопка */}
        <Button variant="primary">Primary Button</Button>
        <Button isLoading variant="primary">
          Primary Button
        </Button>

        <Button variant="primary" onClick={() => alert('Clicked!')}>
          Clicked Button
        </Button>

        <Button variant="outline">Default Button</Button>

        <Button variant="link">Link Button</Button>

        <Button href="/">Href Button</Button>

        <Button>Default Button</Button>

        <Button variant="danger">Danger Button</Button>
      </div>

      <div
        className="container"
        style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}
      >
        {/* Основная кнопка */}
        <Button radius="sm" variant="primary">
          Primary Button
        </Button>
        <Button radius="sm" isLoading variant="primary">
          Primary Button
        </Button>

        <Button radius="sm" variant="primary" onClick={() => alert('Clicked!')}>
          Clicked Button
        </Button>

        <Button radius="sm" variant="outline">
          Default Button
        </Button>

        <Button radius="sm" variant="link">
          Link Button
        </Button>

        <Button radius="sm" href="/">
          Href Button
        </Button>

        <Button radius="sm">Default Button</Button>

        <Button radius="sm" variant="danger">
          Danger Button
        </Button>
      </div>

      <div
        className="container"
        style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}
      >
        {/* Основная кнопка */}
        <Button radius="md" variant="primary">
          Primary Button
        </Button>
        <Button radius="md" isLoading variant="primary">
          Primary Button
        </Button>

        <Button radius="md" variant="primary" onClick={() => alert('Clicked!')}>
          Clicked Button
        </Button>

        <Button radius="md" variant="outline">
          Default Button
        </Button>

        <Button radius="md" variant="link">
          Link Button
        </Button>

        <Button radius="md" href="/">
          Href Button
        </Button>

        <Button radius="md">Default Button</Button>

        <Button radius="md" variant="danger">
          Danger Button
        </Button>
      </div>

      <div
        className="container"
        style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}
      >
        {/* Основная кнопка */}
        <Button radius="lg" variant="primary">
          Primary Button
        </Button>
        <Button radius="lg" isLoading variant="primary">
          Primary Button
        </Button>

        <Button radius="lg" variant="primary" onClick={() => alert('Clicked!')}>
          Clicked Button
        </Button>

        <Button radius="lg" variant="outline">
          Default Button
        </Button>

        <Button radius="lg" variant="link">
          Link Button
        </Button>

        <Button radius="lg" href="/">
          Href Button
        </Button>

        <Button radius="lg">Default Button</Button>

        <Button radius="lg" variant="danger">
          Danger Button
        </Button>
      </div>

      <div
        className="container"
        style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}
      >
        {/* Основная кнопка */}
        <Button radius="full" variant="primary">
          Primary Button
        </Button>
        <Button radius="full" isLoading variant="primary">
          Primary Button
        </Button>

        <Button
          radius="full"
          variant="primary"
          onClick={() => alert('Clicked!')}
        >
          Clicked Button
        </Button>

        <Button radius="full" variant="outline">
          Default Button
        </Button>

        <Button radius="full" variant="link">
          Link Button
        </Button>

        <Button radius="full" href="/">
          Href Button
        </Button>

        <Button radius="full">Default Button</Button>

        <Button radius="full" variant="danger">
          Danger Button
        </Button>
      </div>

      <div
        className="container"
        style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}
      >
        {/* Основная кнопка */}
        <Button size="sm" radius="full" variant="primary">
          Primary Button
        </Button>
        <Button size="sm" radius="full" isLoading variant="primary">
          Primary Button
        </Button>

        <Button
          size="sm"
          radius="full"
          variant="primary"
          onClick={() => alert('Clicked!')}
        >
          Clicked Button
        </Button>

        <Button size="sm" radius="full" variant="outline">
          Default Button
        </Button>

        <Button size="sm" radius="full" variant="link">
          Link Button
        </Button>

        <Button size="sm" radius="full" href="/">
          Href Button
        </Button>

        <Button size="sm" radius="full">
          Default Button
        </Button>

        <Button size="sm" radius="full" variant="danger">
          Danger Button
        </Button>
      </div>

      <div
        className="container"
        style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}
      >
        {/* Основная кнопка */}
        <Button size="lg" radius="full" variant="primary">
          Primary Button
        </Button>
        <Button size="lg" radius="full" isLoading variant="primary">
          Primary Button
        </Button>

        <Button
          size="lg"
          radius="full"
          variant="primary"
          onClick={() => alert('Clicked!')}
        >
          Clicked Button
        </Button>

        <Button size="lg" radius="full" variant="outline">
          Default Button
        </Button>

        <Button size="lg" radius="full" variant="link">
          Link Button
        </Button>

        <Button size="lg" radius="full" href="/">
          Href Button
        </Button>

        <Button size="lg" radius="full">
          Default Button
        </Button>

        <Button size="lg" radius="full" variant="danger">
          Danger Button
        </Button>
      </div>
    </>
  );
};

export default Buttons;
