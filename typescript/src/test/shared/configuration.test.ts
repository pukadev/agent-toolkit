import {isToolAllowed} from '../../shared/configuration';

describe('isToolAllowed', () => {
  it('should return true if all permissions are allowed', () => {
    const tool = {
      method: 'test',
      name: 'Test',
      description: 'Test',
      parameters: {},
      actions: {
        customers: {
          create: true,
          read: true,
        },
        invoices: {
          create: true,
          read: true,
        },
      },
    };

    const configuration = {
      actions: {
        customers: {
          create: true,
          read: true,
        },
        invoices: {
          create: true,
          read: true,
        },
      },
    };

    expect(isToolAllowed(tool, configuration)).toBe(true);
  });

  it('should return false if any permission is denied', () => {
    const tool = {
      method: 'test',
      name: 'Test',
      description: 'Test',
      parameters: {},
      actions: {
        customers: {
          create: true,
          read: true,
        },
        invoices: {
          create: true,
          read: true,
        },
      },
    };

    const configuration = {
      actions: {
        customers: {
          create: true,
          read: true,
        },
        invoices: {
          create: true,
          read: false,
        },
      },
    };

    expect(isToolAllowed(tool, configuration)).toBe(false);
  });

  it('should return false if any resource is not allowed', () => {
    const tool = {
      method: 'test',
      name: 'Test',
      description: 'Test',
      parameters: {},
      actions: {
        paymentLinks: {
          create: true,
        },
      },
    };

    const configuration = {
      actions: {
        customers: {
          create: true,
          read: true,
        },
        invoices: {
          create: true,
          read: true,
        },
      },
    };

    expect(isToolAllowed(tool, configuration)).toBe(false);
  });
});
