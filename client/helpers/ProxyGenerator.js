class ProxyGenerator {
  static create(object, props, trap) {
    return new Proxy(object, {
      get(target, prop) {
        if (
          typeof(target[prop]) == typeof(Function)
          && props.includes(prop)
        ) {
          return function() {
            target[prop].apply(target, arguments);
            trap(target);
          };
        }
        
        return target[prop];
      },
      set(target, prop, value) {
        const updated = Reflect.set(target, prop, value);
        if (prop.includes(prop)) {
          trap(target);
        }

        return updated;
      }
    });
  }
}