export default defineEventHandler(async (event) => {
  // Query the 'shop' collection defined in content.config.ts
  const items = await queryCollection(event, 'shop').all()
  
  return items.map(item => ({
    loc: item.path
  }))
})